// Importing all the sections of the website
import Navbar from "../components/Sections/Navbar";
import Category from "../components/Sections/Category";
import Category2 from "../components/Sections/Category2";
import Hero from "../components/Sections/Hero";
import Services from "../components/Sections/Services";
import Banner from "../components/Sections/Banner";
import Banner2 from "../components/Sections/Banner2";
import Products from "../components/Sections/Products";
import Blogs from "../components/Sections/Blogs";
import Partners from "../components/Sections/Partners";
import Footer from "../components/Sections/Footer";
import Popup from "../components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

// Importing Hooks and Tools
import { useState } from "react";
import { useEffect } from "react";

function Home({ orderPopup, handleOrderPopup }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} quickLinks={true}></Navbar>
      <Hero handleOrderPopup={handleOrderPopup}></Hero>
      <Category></Category>
      <Category2></Category2>
      <div id="services">
        <Services></Services>
      </div>
      <Banner></Banner>
      <div id="featured">
        <Products></Products>
      </div>
      <Banner2></Banner2>
      <div id="latest">
        <Blogs></Blogs>
      </div>
      <Partners></Partners>
      <Footer></Footer>
      <Popup
        orderPopup={orderPopup}
        handleOrderPopup={handleOrderPopup}
      ></Popup>
    </div>
  );
}

export default Home;
