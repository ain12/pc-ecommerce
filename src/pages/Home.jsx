import React from "react";
import Navbar from "../components/Navbar";
import Ad from "../components/Ad";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Raffle from "../components/Raffle";

const Home = () => {
  return (
    <div>
      <Ad />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Raffle />
    </div>
  );
};

export default Home;
