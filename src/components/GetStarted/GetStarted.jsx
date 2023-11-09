import React from 'react'
import './GetStarted.css'
const Getstarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
            <span className='primaryText'>Subscribe to our news letter</span>
            <span className='secondaryText'>
            Get the latest updates about the latest developments and exciting news on how we are shaping the future! <br/>
              Click Below to get Started
              </span>
              <button className="button">
                <a href='/projects'>
                  Subscribe Now
                </a>
              </button>
            </div>
        </div>
    </section>
  )
}

export default Getstarted