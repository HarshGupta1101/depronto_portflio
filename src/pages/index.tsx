import Blog from "components/Blog";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Form from "../components/form"
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      < Navbar />
      < Intro />
      < Blog />
      < Table />
      < Form />
    </div>
  );
};

export default Home;
