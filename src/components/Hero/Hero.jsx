import React from "react";
import './Hero.css'
import { Link, NavLink } from "react-router-dom";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './hswiper.css';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import Header from "../Header/Header";
import { motion } from "framer-motion";
import { titleVariants } from "../../utils/animations";

const Hero = () =>{
    return(  
        <>
      <Swiper
        spaceBetween={30}
        loop={true}
        speed = {2200}
        effect={'fade'}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 111500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        
            <SwiperSlide className="hero-wrapper">
            <div
           
             className="paddings innerWidth flexCenter hero-container" >
                <motion.div
                 initial={{ opacity: 0, x: -100 }}
                 whileInView={{
                     opacity: 1,
                     x: 0,
                     transition: {
                         type: "easeIn",
                         duration: 1,
                         delay: .7
                     }
                 }} 
                 className="flexColStart hero-left">
                  <motion.div 
                  
                  className="hero-title">
                    {/* <div className="orange-circle"/> */}
                    <h1>
                        Oak Homes <br/> </h1>
                        <h2>
                        Luxury Living
                        at  it’s<span className="orangeText"> Best</span> Pricing
                        </h2>
                  </motion.div>
                  {/* <div className="flexColStart secondaryText hero-des">
                    <span>
                    Unlock your path to wealth with smart </span><span>
                     investment in real estate ...
                    </span>
                  </div> */}
                  <div className="innerWidth hero-button">
                    <div>
                  <button className="button">
                  <Link to={"/projects"}>
                  View Properties
                </Link>
                    </button>
                    </div>
                    <div>
                    <button className="button">
                    <a href="">Get Started</a>
                    </button>
                    </div>
                  </div>

                  
                  <div className="flexCenter stats">
                  <div className="flexColCenter hero-stats">
                    <span>
                    <CountUp start={10} end={70} duration={4}/> <span>+</span>
                    </span>
                   
                    <span className="secondaryText2">
                    Projects for Sale
                    </span>
                      
                  </div>
                  <div className="flexColCenter hero-stats">
                    <span>
                    <CountUp start={10} end={29} duration={4}/> <span>+</span>
                    </span>
                   
                    <span className="secondaryText2">
                    Upcoming Projects
                    </span>
                      
                  </div>
                  <div className="flexColCenter hero-stats">
                    <span>
                    <CountUp start={5} end={49} duration={4}/> <span>+</span>
                    </span>
                   
                    <span className="secondaryText2">
                    Sold Out Projects
                    </span>
                      
                  </div>
                  </div>

   
                </motion.div>
                <motion.div
                initial='offscreen'
                whileInView={"onscreen"}
                variants={titleVariants} className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./r3.png" alt="" />
                    </div>
                    </motion.div>
                    </div>
            </SwiperSlide>

            <SwiperSlide className="hero-wrapper02">
            <section  className="paddings innerWidth flexCenter hero-container">
<div className="flexColStart hero-left">
  <div className="hero-title">
    {/* <div className="orange-circle"/> */}
    <h1>
        Oak Home <br/> </h1>
        <h2>
        Luxury Living
        at  it’s<span className="orangeText"> Best</span> Pricing
        </h2>
  </div>
  {/* <div className="flexColStart secondaryText hero-des">
    <span>
    Unlock your path to wealth with smart </span><span>
     investment in real estate ...
    </span>
  </div> */}
  <div className="innerWidth hero-button">
    <div>
  <button className="button">
  <Link to={"/projects"}>
  View Properties
</Link>
    </button>
    </div>
    <div>
    <button className="button">
    <a href="">Get Started</a>
    </button>
    </div>
  </div>

  
  <div className="flexCenter stats">
  <div className="flexColCenter hero-stats">
    <span>
    <CountUp start={10} end={70} duration={4}/> <span>+</span>
    </span>
   
    <span className="secondaryText2">
    Projects for Sale
    </span>
      
  </div>
  <div className="flexColCenter hero-stats">
    <span>
    <CountUp start={10} end={29} duration={4}/> <span>+</span>
    </span>
   
    <span className="secondaryText2">
    Upcoming Projects
    </span>
      
  </div>
  <div className="flexColCenter hero-stats">
    <span>
    <CountUp start={5} end={49} duration={4}/> <span>+</span>
    </span>
   
    <span className="secondaryText2">
    Sold Out Projects
    </span>
      
  </div>
  </div>


</div>
<div className="flexCenter hero-right">
    <div className="image-container">
        <img src="./hero-image.png" alt="" />
    </div>
    </div>
    </section>
</SwiperSlide>
            
       
        </Swiper>
        </>
      )
}

export default Hero