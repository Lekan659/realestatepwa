import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left */}
            <div className="flexColStart f-left">
                <img src="./logo.png" alt="" width={120}/>

                <span style={{
                    color : 'lavender'
                }} className="secondaryText">
                    Our Vision is to make all people<br />
                    the best place to live for them.

                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>
                    Information
                    </span><span style={{
                    color : 'lavender'
                }} className='secondaryText'>
                    No 4 Ribadu Road, Ikoyi.Lagos
                    </span>
                    <span className='orangeText'>
                        Quick Links
                    </span>
                    <div style={{
                    color : 'lavender'
                }} className="flexCenter f-menu">

                   
                    <span>Properties</span><span>Services</span><span>Contact Us</span>

                    </div>
            </div>
        </div>
    </section>
  )
}

export default Footer