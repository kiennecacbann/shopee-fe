import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import FlashSale from "../../components/flashsale/FlashSale";
import StackBanner from "../../components/stackbanner/StackBanner";
import ShopeeMall from "../../components/shopee-mall/ShopeeMall";
import DailyDiscover from "../../components/daily-discover/DailyDiscover";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="bg-[#f5f4f4]">
        <Categories/>
        <FlashSale />
        <StackBanner/>
        <ShopeeMall/>
        <DailyDiscover/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
