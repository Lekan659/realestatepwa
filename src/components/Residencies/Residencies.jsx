import React from "react";
import './Residencies.css'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import data from "../../utils/slider.json"
import {sliderSettings} from "../../utils/common.js"
import PropertyCard from "../PropertyCard/PropertyCard";
import { containerVariants, desVariantsres, tagVariantsres, titleVariantsres } from "../../utils/animations";
import { motion } from "framer-motion";
// import CountUp from "react-countup";
const Residencies = () =>{
    return( 
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="flexColStart r-head">
                    <motion.span
                    initial='offscreen'
                        whileInView={"onscreen"}
                        variants={tagVariantsres} className="orangeText">
                        Best Choices</motion.span>
                    <motion.span
                    initial='offscreen'
                    whileInView={"onscreen"}
                    variants={titleVariantsres} className="primaryText">
                            Popular Residencies
                        </motion.span>
                        </div>

                        {/* <Swiper {...sliderSettings}><SliderButtons/> </Swiper> */}
                    <Swiper {...sliderSettings}>
                    <SliderButtons/>
                      <motion.div
                    initial='offscreen'
                    whileInView={"onscreen"}
                    variants={desVariantsres}>
                        {
                            data.map((card, i) =>(
                                <SwiperSlide>
                                    <motion.div
                                    initial='offscreen'
                                    whileInView={"onscreen"}
                                    variants={containerVariants(i+1) * 0.2 }
                                    >
                                    <PropertyCard card={card}/>
                                    </motion.div>
                                    </SwiperSlide>

                            ))
                        }
                        </motion.div>
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