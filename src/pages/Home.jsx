import React from "react";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <Add />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
