import React from 'react'
import './GetStarted.css'
const Getstarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
            <span className='primaryText'>Get Started with Oak Homes</span>
            <span className='secondaryText'>
              Luxury Living at Its Best Pricing <br/>
              Click Below to get Started
              </span>
              <button className="button">
                <a href='#'>
                  Get Started
                </a>
              </button>
            </div>
        </div>
    </section>
  )
}

export default Getstarted