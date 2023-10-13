import React from "react";
import './Hero.css'
import { Link, NavLink } from "react-router-dom";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import { Navigation, Autoplay, Pagination, EffectCreative } from "swiper";
const Hero = () =>{
    return(  
        <>
                <Swiper
        spaceBetween={0}
        speed = {2200}
        effect= {'fade'}
        fadeEffect= {
          {crossFade: true}
        }
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        className="mySwiper"
      >
        
            <SwiperSlide className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container" >
                <div className="flexColStart hero-left">
                  <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Oak Homes <br/> </h1>
                        <h2>
                        Luxury Living <br/>
                        at  it’s<span className="orangeText"> Best</span> Pricing
                        </h2>
                  </div>
                  <div className="flexColStart secondaryText hero-des">
                    <span>
                    Unlock your path to wealth with smart </span><span>
                     investment in real estate ...
                    </span>
                  </div>
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
                    </div>
            </SwiperSlide>

            <SwiperSlide className="hero-wrapper02">
            <section  className="paddings innerWidth flexCenter hero-container">
<div className="flexColStart hero-left">
  <div className="hero-title">
    <div className="orange-circle"/>
    <h1>
        Oak Homes <br/> </h1>
        <h2>
        Luxury Living <br/>
        at  it’s<span className="orangeText"> Best</span> Pricing
        </h2>
  </div>
  <div className="flexColStart secondaryText hero-des">
    <span>
    Unlock your path to wealth with smart </span><span>
     investment in real estate ...
    </span>
  </div>
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