import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import "./Property.css"
import data from "../../utils/sliderproducts.json"
// import { MdMeetingRoom } from 'react-icons/md'
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom, MdOutlinePool, MdSecurity, MdSportsGymnastics } from "react-icons/md";
const Porperty = () => {
  const {pathname} = useLocation()
  const id = pathname.split("/").slice(-1)[0]
  console.log(data)

  return (
    <div className="wapper">
       <div className="flexColStart paddings innerWidth property-container">

        <img src={data[id]?.image} alt="Home Image" />

        <div className="flexCenter property-details">
          <div className="flexColStart left">
            <div className="flexStart head">
            <span className="primaryText">{data[id]?.name}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                $ {data[id]?.price}
              </span>
            </div>

            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data[id]?.facilities?.bathrooms} Bathrooms</span>
              </div>

              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data[id]?.facilities.parkings} Parking</span>
              </div>

              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data[id]?.facilities.bedrooms} Room/s</span>
              </div>
            </div>

              {/* description */}

              <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data[id]?.description}
            </span>

              {/* Amenities */}
              <div className="flexColStart amenities">
              <div className="flexStart amenity">
                <MdSportsGymnastics size={20} color="#ffa500" />
                {/* <MdSportsGymnastics */}
                <span>{data[id]?.facilities?.bathrooms} Gym</span>
              </div>

              {/* parkings */}
              <div className="flexStart amenity">
                <MdOutlinePool size={20} color="#ffa500" />
                <span>{data[id]?.facilities.parkings}Pool</span>
              </div>

              {/* rooms */}
              <div className="flexStart amenity">
                <MdSecurity size={20} color="#ffa500" />
                <span>{data[id]?.facilities.bedrooms} 24/7 Security</span>
              </div>

              <div className="flexStart amenity">
                <Tech size={20} color="#ffa500" />
                <span>{data[id]?.facilities.bedrooms} 24/7 Security</span>
              </div>
              </div>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data[id]?.address}{" "}
                {data[id]?.city}{" "}
                {data[id]?.country}
              </span>
            </div>




          </div>
        </div>

       </div>

    </div>
  )
}

export default Porperty