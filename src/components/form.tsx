import React from 'react'

const form = () => {

  return (
      <div style={{ marginTop:"40rem", height: '40rem', padding: '8rem' }}>
        <p className='h1 fw-bold display-1 mb-5'>FeedBack</p>
        <div className="mb-5">
          <form id="contactForm">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-control" style={{width:"40rem",height:"3rem"}} id="name" type="text" placeholder="Name" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="date">Date</label>
              <input className="form-control" id="date" style={{width:"40rem",height:"3rem"}} type="date"/>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="feedback">FeedBack Title</label>
              <input className="form-control" id="feedback" style={{width:"40rem",height:"3rem"}} type="text" placeholder="FeedBack Title" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-control" id="message" placeholder="Message" style = {{height: "5rem"}}></textarea>
            </div>
            <button className="btn btn-primary btn-lg mb-5" type="submit">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default form