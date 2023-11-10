import React from "react";
import './Heroprojects.css'
import CountUp from "react-countup";
const Herooldprojects = () =>{
    return(  
        <section className="hero-wrapperp">
            <div className="paddings innerWidth flexCenter hero-containerp">

                <div className="flexColStart hero-leftp">
                  <div className="hero-titlep">
                    {/* <div className="orange-circlep"/> */}
                    <h1>
                    Past Properties  </h1>
                        {/* <h2>
                        Your <span className="orangeText">Home</span>  Journey Starts Now <br/>
                        at  Pricing
                        </h2> */}
                  </div>
                  <div className="flexColStart secondaryText hero-desp">
                    <span>
                   
 Where Luxury Residences Redefine Living.
                    </span>
                  </div>
                  <div className="innerWidth hero-buttonp">
                    {/* <div>
                  <button className="button">
                    <a href="">View Properties</a>
                    </button>
                    </div>
                    <div>
                    <button className="button">
                    <a href="">Get Started</a>
                    </button>
                    </div> */}
                  </div>

                  
                  {/* <div className="flexCenter statsp">
                  <div className="flexColCenter hero-statsp">
                    <span>
                    <CountUp start={10} end={70} duration={4}/> <span>+</span>
                    </span>
                   
                    <span className="secondaryText2p">
                    Projects for Sale
                    </span>
                      
                  </div>
                  <div className="flexColCenter hero-statsp">
                    <span>
                    <CountUp start={10} end={29} duration={4}/> <span>+</span>
                    </span>
                   
                    <span className="secondaryText2p">
                    Upcoming Projects
                    </span>
                      
                  </div>
                  <div className="flexColCenter hero-statsp">
                    <span>
                    <CountUp start={5} end={49} duration={4}/> <span>+</span>
                    </span>
                   
                    <span className="secondaryText2p">
                    Sold Out Projects
                    </span>
                      
                  </div>
                  </div>

    */}
                </div>
                {/* <div className="flexCenter hero-rightp">
                    <div className="image-containerp">
                        <img src="./hero-image.png" alt="" />
                    </div>
                    </div> */}
            </div>
        </section>
      )
}

export default Herooldprojects