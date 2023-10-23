'use client';
import React, {useRef} from 'react';
import './Homevid.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const Homevid = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33, 1"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
    return (
        <div className=" innerWidth bv-container">
            <div className="container">
                <motion.video 
                ref={ref} 
                className='bv-video' 
                loop 
                autoPlay 
                muted 
                controls 
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress
                    }} >
                    <source src="/oakvids.mp4" type='video/mp4' />
                </motion.video>
            </div>
        </div>
    )
}

export default Homevid