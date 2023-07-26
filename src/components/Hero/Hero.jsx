import React from "react";
import './Hero.css'
const Hero = () =>{
    return(  
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                <div className="flexColStart hero-left">
                  <div className="hero-title">
                    <h1>
                        Discover <br/> 
                        More <br/>
                        Properties
                    </h1>
                  </div>
                  <div className="flexColStart hero-des">
                    <span>
                    We leave you with an impression that stays with you…</span><span>
                    which makes us STAY with you over a life time.
                    </span>
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