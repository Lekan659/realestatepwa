import React from 'react'
import './Ourvalue.css'
import { hitFeatures } from '../../utils/data'

const Ourvalue = () => {
  return (
    <div className="hiw-wrapper">
        <div className="container">
            <div className="hiw-containers">
                <div className="hiw-head">
                    
                    <span className="title">
                        Our Core Values
                    </span>

                    <span className="tag">
                    We are a one stop shop for Real Estate Development, Financing, Management,
Sales of Properties and Materials sourcing across the Globe.
                    </span>
                </div>

                {/* <div className="hiw-features">
                    {
                        hitFeatures.map()
                    }
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Ourvalue