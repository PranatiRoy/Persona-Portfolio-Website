import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Crypto from "../../img/crypto-project.png";
import Tindog from "../../img/tindog.png";
import MIClone from "../../img/mi-clone.png";
import LeaveApp from "../../img/leave-project.png";
import Bank from "../../img/bank-interest-project.png";
import PassAuth from "../../img/passauth-project.png";
import Calculator from "../../img/calculator.png";
import OnlineFood from "../../img/onlinefood.png";
import Google from "../../img/google-project.png"
import Product from "../../img/product-project.png"
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
         <a href="#" target="blank"><img src={LeaveApp} alt="" /> </a> 
         <a href="https://pranatiroy.github.io/OnlineFoodOrderManagement/" target="blank"><img src={OnlineFood} alt="" /></a>
         <a href="https://pranatiroy.github.io/Simple-Product-Page-Design/" target="blank"><img src={Product} alt="" /></a>
     
  
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://heroic-malabi-d875de.netlify.app/" target="blank"><img src={MIClone} alt="" /></a>
        <a href="https://pranatiroy.github.io/Password-Authentication-Project/" target="blank"><img src={PassAuth} alt="" /></a>
        </SwiperSlide>
        
        <SwiperSlide>
        <a href="https://lively-torrone-466a9a.netlify.app/" target="blank"><img src={Crypto} alt="" /></a>
        <a href="https://pranatiroy.github.io/Calculator-JS/" target="blank"><img src={Calculator} alt="" /></a>
        
        
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://pranatiroy.github.io/TinDog-Website-Creation/" target="blank"><img src={Tindog} alt="" /></a>
        <a href="https://pranatiroy.github.io/Banking-Interest-Management-System/" target="blank"><img src={Bank} alt="" /> </a>
       
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
