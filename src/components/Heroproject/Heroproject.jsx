import React from "react";
import './Heroproject.css'
import CountUp from "react-countup";
const Heroproject = ({card}) => {
    return(  
        <section className="hero-wrapperp">
            <div className="paddings innerWidth flexCenter hero-containerp">

                <div className="flexColStart hero-leftp">
                  <div className="hero-titlepro">
    
                    <h1>
                        Oak Projects  </h1>

                  </div>
                  <div className="flexColStart secondaryText hero-desp">
                    <span>
                   
<span className="orangeText newtext">The {card.name} </span> 
                    </span>
                  </div>


                  

                </div>

            </div>
        </section>
      )
}

export default Heroproject