import React from 'react'
import "./PropertyCard.css"
import { useNavigate } from 'react-router-dom'


const PropertyCard = ({card}) => {
    const navigate = useNavigate();
    return (
        <div className="flexColStart r-card"
        onClick={() => navigate(`../projects/${card.id}`)}>
                                        
        <img src={card.image} alt="home" />
        <span className="secondaryText r-price">
            <span style = {{color: "orange"}}> </span>
            <span>{card.price}</span>
        </span>
   

    <span className="primaryText">{card.name}</span>
    <span className="secondaryText">{card.detail}</span>
    </div>
    )
}

export default PropertyCard
