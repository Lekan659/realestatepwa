import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left */}
            <div className="flexColStart f-left">
                <img src="./logo.png" alt="" width={120}/>

                <span className="secondaryText">
                    Our Vision is to make all people<br />
                    the best place to live for them.

                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>
                    Information
                    </span><span className='secondaryText'>
                    11A Jubril Aminu street Parkview Estate, Ikoyi.Lagos
                    </span>
                    <span className='orangeText'>
                        Quick Links
                    </span>
                    <div className="flexCenter f-menu">

                   
                    <span>Properties</span><span>Services</span><span>Contact Us</span>

                    </div>
            </div>
        </div>
    </section>
  )
}

export default Footer