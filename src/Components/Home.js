import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container ">
            <img src= { BannerBackground} alt =""/>
        </div>
        <div className=" home-text-section">
            <h1 className=" primary-heading " >
                Hot & Fresh Food Delivered At You'r Doorstep 
            </h1>
            <p className=" primary-text">
                Healthy and tasty fresh food from India's Renowed Restaurants is here.
                At you door step just <span> @199</span>
            </p>
            <button  className="secondary-button">
                Order Now <FiArrowRight/>
            </button>
            {/* <div className="home-image container">
            <img src={BannerImage} alt ="" />
        </div> */}
        </div>
        
    </div>
  )
}

export default Home