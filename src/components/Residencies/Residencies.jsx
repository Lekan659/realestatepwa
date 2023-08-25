import React from "react";
import './Residencies.css'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import data from "../../utils/slider.json"
import {sliderSettings} from "../../utils/common.js"
import PropertyCard from "../PropertyCard/PropertyCard";
// import CountUp from "react-countup";
const Residencies = () =>{
    return( 
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="flexColStart r-head">
                    <span className="orangeText">
                        Best Choices</span>
                    <span className="primaryText">
                            Popular Residencies
                        </span>
                        </div>

                        {/* <Swiper {...sliderSettings}><SliderButtons/> </Swiper> */}
                    <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    <div>
                        {
                            data.map((card, i) =>(
                                <SwiperSlide>
                                    <PropertyCard card={card}/>
                                    </SwiperSlide>

                            ))
                        }
                        </div>
                    </Swiper>
               
            </div>
        </section>
     )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}