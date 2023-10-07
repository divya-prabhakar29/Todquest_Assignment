import React from 'react'
//import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';
const About = () => {
  return (
    <div className=" about-section-container">
     <div className=" about-bacground-image-container">
        
     </div>
     <div className= " about-section-image-container ">
          <img src = {AboutBackgroundImage}  alt =" " />
     </div>
     <div className= " about-section-text-container">
        <p className="primary-subheading"> About </p>
         <h1 className="primary-heading">
             Food Is An Important Part Of Balanced Diet
            </h1>
        <p className=" primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore dolores sunt tempora magni facilis ipsa ut? Nemo, 
            itaque tempora? Pariatur natus nobis nihil provident
             voluptatum in cum! Tenetur, et dolor.
        </p>
        <p className=" primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore dolores sunt tempora magni facilis ipsa ut? Nemo, 
            itaque tempora? Pariatur natus nobis nihil provident
             voluptatum in cum! Tenetur, et dolor.
        </p>
        <div className=" about-button-container">
            <button className="secondary-button ">Learn More </button>
            <button className="watch-video-button"><BsFillPlayCircleFill/> Watch Video</button>
        </div>
     </div>
    </div>
  )
}

export default About