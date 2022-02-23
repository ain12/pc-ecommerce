import React from "react";
import Navbar from "../components/Navbar";
import Ad from "../components/Ad";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <Ad />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
