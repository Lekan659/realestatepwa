import Heroabout from '../../components/Heroabout/Heroabout'
import React, { useState } from 'react'
import { 
  AccordionItem,
  Accordion, 
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState
}   from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import "./About.css"
import data from "../../utils/accordion"
import Getstarted from '../../components/GetStarted/GetStarted';

const About = () => {
  return (
    <div className=''>
        <Heroabout />

        <section className="v-wrapper a-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className='orangeText'>Home ~ About Us</span>
          <span className='primaryText'>About Us at Oak Homes</span>
          <span style={{
            fontSize: "1.3rem"
          }} className='secondaryText'>Oak Homes is a leading Real Estate Development company in Nigeria. We pride ourselves in being a young, innovative and creative team, yet with combined experience spanning over two (2) decades.
          <br/>  <br/>

We prides ourselves as lovers of ART and creating masterpieces of Real Estate Portfolio. Our apartments are unrivalled and unparalleled luxury pieces of imaginative thinking and immense value!

<br/>  <br/>

Whether as an investor or a first time home buyer, we leave you with an impression that stays with you…which makes us STAY with you over a life time.
</span>

{/* */}
        </div>
      </div>
    </section>
<div className="points">
    
</div>

    <Getstarted/>
        
    </div>
  )
}

export default About