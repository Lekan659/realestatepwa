import React from 'react'
import './Welcome.css'
import { features } from '../../utils/data'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '../../utils/animations'



export const Welcome = () => {
    return (
        <div className="innerWidth wel-wrapper">
            <div className="">
                <div className="wel-container">
                    {/* <div className="wel-head">
                        <motion.span
                            initial='offscreen'
                            whileInView={"onscreen"}
                            variants={tagVariants}
                            className='tag'>Welcome to Oak Homes</motion.span>
                        <motion.span
                            initial='offscreen'
                            whileInView={"onscreen"}
                            variants={titleVariants}
                            className='title'> Lorenn Plenty ipsum</motion.span>
                        <motion.span
                            initial='offscreen'
                            whileInView={"onscreen"}
                            variants={desVariants}
                            className="description">oopp</motion.span>

                    </div>

                    <div className="wwd-blocks">
                        <div className="wwd-block">
                            <span className='sec-title'>Mission</span>
                            <span className='text'>Our mission is to create exquisite, high-end properties that redefine luxury living, combining exceptional design, unparalleled craftsmanship, and impeccable attention to detail.</span>
                            <div className="block-features">
                                {
                                    features.slice(0, 3).map((feature, i) => (
                                        <div key={i} className="block-feature">
                                            <img src={feature.icon} alt="mission" width={60} height={60} />
                                            <span>{feature.title}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="wwd-block">
                            <span className='sec-title'>Vision</span>
                            <span className='text'> Our vision is to be a premier name in luxury real estate, recognized globally for our iconic architectural designs, uncompromising quality, and unparalleled customer service</span>
                            <div className="block-features">
                                {
                                    features.slice(3, 6).map((feature, i) => (
                                        <div key={i} className="block-feature">
                                            <img src={feature.icon} alt="mission" width={60} height={60} />
                                            <span>{feature.title}</span>
                                        </div>
                                    ))
                                }
                            </div></div>
                    </div> */}

                    <div className="wwd-support1">
                        <div>
                            <motion.span
                                initial='offscreen'
                                whileInView={"onscreen"}
                                variants={tagVariants} className="primaryText">
                                Elegance in Every Detail
                            </motion.span>
                            <hr/>
                            {/* <motion.span
                                initial='offscreen'
                                whileInView={"onscreen"}
                                variants={titleVariants} className="description">
                                Luxury Living at its Best Pricing
                            </motion.span> */}
                        </div>
                    </div>
                    <motion.div 
                        initial='offscreen'
                        whileInView={"onscreen"}
                        variants={desVariants} className="wwd-support">


                        <div>
                            <span style={{
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "2rem"
          }}  className="secondaryText">
                                Step into a world where luxury meets reality.  Introducing Oak Homes, an enclave where the very essence of living is redefined and elevated to new, unparalleled heights.
                            </span>
                            <span style={{
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "2rem"
          }}  className="secondaryText">
                                Our collection of prestigious residences offers the epitome of elegance, each a masterpiece waiting to be yours. From sun-kissed estates with sweeping views to urban sanctuaries in the heart of the city, Oak Homes delivers unparalleled craftsmanship and design. Explore our curated selection of exquisite properties, where comfort and sophistication blend seamlessly. Your dream home, just a click away. Welcome to Oak Homes, where extravagance meets the everyday
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
