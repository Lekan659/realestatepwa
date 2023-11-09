'use client';
import React, { useRef } from 'react';
import './Homevid.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { tagVariants, titleVariants } from '../../utils/animations';



const Homevid = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33, 1.4"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
    return (
        <div className=" innerWidth bv-container">
            <div className="homehead">

                <motion.span initial='offscreen'
                    whileInView={"onscreen"}
                    variants={tagVariants} className="primaryText">
                    Experience Luxury Unveiled
                </motion.span>

                <motion.span initial='offscreen'
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="secondaryText infom" style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        lineHeight: "2rem"
                      }} >
                    Step inside our world of opulent living and discover the essence of elegance. Get captivated by the grandeur of our luxury homes






                </motion.span>
            </div>
            <div className="container">
                <motion.video
                    ref={ref}
                    className='bv-video'
                    loop
                    autoPlay
                    muted
                    controls
                    // style={{
                    //     scale: scrollYProgress,
                    //     opacity: scrollYProgress
                    // }}
                     >
                    <source src="/oakkvids.mp4" type='video/mp4' />
                </motion.video>
            </div>
        </div>
    )
}

export default Homevid