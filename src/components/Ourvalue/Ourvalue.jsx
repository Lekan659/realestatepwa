import React from 'react'
import './Ourvalue.css'
import { hitFeatures } from '../../utils/data'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '../../utils/animations'


const Ourvalue = () => {
    const featureVariants = {
        "offscreen": {
            scale: 0.5
        },
        "onscreen": {
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 2
            },
        },
    }
    return (
        <div className="innerWidth hiw-wrapper">
            <div className="container">
                <div className="hiw-containers">
                    <div className="hiw-head">

                        <motion.span initial='offscreen'
                            whileInView={"onscreen"}
                            variants={tagVariants} className="primaryText">
                            Our  Values
                        </motion.span>

                        <motion.span initial='offscreen'
                            whileInView={"onscreen"}
                            variants={titleVariants}
                            className="text infom">
                            We are a one stop shop for Real Estate Development, Financing, Management,
                            Sales of Properties and Materials sourcing across the Globe.
                        </motion.span>
                    </div>

                    <div className="hiw-features">
                        {
                            hitFeatures.map((feature, i) => (
                                <motion.div
                                    initial='offscreen'
                                    whileInView={"onscreen"}
                                    variants={featureVariants} className='hiw-feature' key={i}>

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
                                         className="detail">
                                        <span className="des">
                                            0{i + 1}
                                        </span>
                                        <span className="primaryText">
                                            {feature.title}
                                        </span>
                                        <span className="text">
                                            {feature.des}
                                        </span>

                                    </motion.div>

                                    <div className="icons">
                                        <img src={feature.icon} width={128} height={128} alt="icon" style={{ translate: "50% 0rem" }} />


                                    </div>

                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourvalue