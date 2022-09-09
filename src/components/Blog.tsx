import axios from 'axios';
import React, { useEffect, useState } from 'react';
import img4 from '../static/images/4.jpg';

const Blog = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const api = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setdata(response.data.slice(1, 4));
      console.log(data);
    };

    api();
  }, []);

  return (
    <div style={{ height: '60rem', padding: '8rem' }}>
      <p className='h1 fw-bold display-1 mb-5'>Blogs</p>
      <div className='row mb-5'>
        {data.map((d) => (
          <div className='col-md-4 mb-5'>
            <div className='card' style={{ width: '36rem' }}>
              <img src={img4} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{d.title}</h5>
                <p className='card-text'>{d.body}</p>
                <a href = {`https://jsonplaceholder.typicode.com/posts/${d.id}`} className='btn btn-primary fs-3'>Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
