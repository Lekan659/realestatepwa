import React from "react";
import './Hero.css'
import CountUp from "react-countup";
const Hero = () =>{
    return(  
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                <div className="flexColStart hero-left">
                  <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Discover <br/> 
                        More <br/>
                        Properties
                    </h1>
                  </div>
                  <div className="flexColStart secondaryText hero-des">
                    <span>
                    We leave you with an impression that stays with you…</span><span>
                    which makes us STAY with you over a life time.
                    </span>
                  </div>
                  <div className="innerWidth hero-button">
                    <div>
                  <button className="button">
                    <a href="">View Properties</a>
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
        </section>
      )
}

export default Hero