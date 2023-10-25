import React from 'react'
import './Ourvalue.css'
import { hitFeatures } from '../../utils/data'

const Ourvalue = () => {
  return (
    <div className="innerWidth hiw-wrapper">
        <div className="container">
            <div className="hiw-containers">
                <div className="hiw-head">
                    
                    <span className="primaryText">
                        Our  Values
                    </span>

                    <span className="text infom">
                    We are a one stop shop for Real Estate Development, Financing, Management,
Sales of Properties and Materials sourcing across the Globe.
                    </span>
                </div>

                 <div className="hiw-features">
                    {
                        hitFeatures.map((feature, i) => (
                            <div className='hiw-feature' key={i}> 

                                <div className="detail">
                                    <span className="des">
                                        0{i+1}
                                    </span>
                                    <span className="sec-title">
                                        {feature.title}
                                    </span>
                                    <span className="text">
                                        {feature.des}
                                    </span>

                                </div>

                                <div className="icons">
                                    <img src={feature.icon} width={128} height={128} alt="icon" style={{translate: "50% 0rem"}} />


                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ourvalue