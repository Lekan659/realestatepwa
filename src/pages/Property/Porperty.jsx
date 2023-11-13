import React, { useState } from "react";
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import "./Property.css"
import { Link } from "react-scroll";
import data2 from "../../utils/slider.json"
// import data from "../../utils/sliderproducts.json"
import data from "../../utils/accordion"
// import { MdMeetingRoom } from 'react-icons/md'
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom, MdOutlinePool, MdSecurity, MdSmartDisplay, MdSportsGymnastics } from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close"
import Heroproject from '../../components/Heroproject/Heroproject'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';

// import './hswiper.css';
import Map from '../../components/Map/Map'
import { desVariantsres } from '../../utils/animations'
import propertydata from '../../utils/property'
const Porperty = () => {
  const {pathname} = useLocation()
  const id = pathname.split("/").slice(-1)[0]
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [menuOpened, setMenuOpened] = useState(false);
  const [open,openchange]=useState(false);
  const functionopenpopup=()=>{
      openchange(true);
  }
  const closepopup=()=>{
      openchange(false);
  }
  console.log(propertydata[id].amenities[0].name)

  return (
    <div className="wapper">
       <Dialog


// fullScreen 
open={open} onClose={closepopup} maxWidth="sm">
  
    <DialogTitle> Schedule an Inspection with us  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
    <DialogContent>
        {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
        {/* <Stack spacing={2} margin={2}>
          <TextField variant="outlined" label="Username"></TextField>
          <TextField variant="outlined" label="Password"></TextField>
          <TextField variant="outlined" label="Email"></TextField>
          <TextField variant="outlined" label="Phone"></TextField>
          <Button color="primary" variant="contained">Submit</Button>
        </Stack> */}

<form className="form" action="">
<div className="form-group">
<label htmlFor="name">
Name
<input
  type="text"
  id="name"
  name="name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
</label>
</div>
<div className="form-group">
<label htmlFor="email">
Email
<input
  type="email"
  id="email"
  name="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
</label>
</div>
<div className="form-group">
<label htmlFor="message">
Message
<textarea
  type="text"
  id="message"
  name="message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
</label>
</div>
<button className='button' type="submit">Send</button>
</form>
    </DialogContent>
    <DialogActions>
    {/* <Button color="success" variant="contained">Yes</Button>
        <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
    </DialogActions>

    
</Dialog>
      <Heroproject card = {propertydata[id]} />
       <div className="flexColStart paddings innerWidth property-container">

       <Swiper
        spaceBetween={30}
        loop={true}
        speed = {2200}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 11500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >

<motion.div>
                        {
                            propertydata[id]?.image.map((image, i) =>(
                                <SwiperSlide>
                                    <motion.div
                                    >
                                              <img src={image} alt="Home Image" />
                                    </motion.div>
                                    </SwiperSlide>

                            ))

                        }
                        </motion.div>

          {/* <img src={data[id]?.image} alt="Home Image" /> */}

        </Swiper>

       

        <div className="flexCenter property-details">
          <div className="flexColStart left">
            <div className="flexStart head">
            <span className="primaryText">{propertydata[id]?.name}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                {propertydata[id]?.price}
              </span>
            </div>

            <div className="flexStart facilities">

            <div className="flexStart facility">
                <MdMeetingRoom size={25} color="#719150" />
                <span>{propertydata[id]?.facilities.bedrooms} BedRooms</span>
              </div>
              {/* bathrooms */}


              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={25} color="#719150" />
                <span>Ample Parking</span>
              </div>

              <div className="flexStart facility">
                <FaShower size={25} color="#719150" />
                <span>{propertydata[id]?.facilities?.bathrooms} Bathrooms</span>
              </div>
              {/* rooms */}

            </div>

              {/* description */}

              <span className="secondaryText" style={{ textAlign: "justify" }}>
              {propertydata[id]?.description}
            </span>

              {/* Amenities */}
              <div className="flexColStart amenities rowf ">
              {
    propertydata[id]?.amenities.map((item, i) => { 
      return (
      <div className="flexStart amenity" key={i} uuid={i}>
      {item.icon}
      {/* <MdSportsGymnastics */}
      <span className='amenitytitle'> {item.name}</span>
    </div>
)
       })
  }

<button className="button">
                      <Link onClick={functionopenpopup} to={"c-wrapper"} spy={true} smooth={true}>
                      <a  >Schedule an Inspection</a>
                      {/* href="mailto:customerservice@oakhomeslimited.com" */}
                      </Link>

                    </button>


              </div>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {propertydata[id]?.address}{" "}
                {propertydata[id]?.city}{" "}
                {propertydata[id]?.country}
              </span>
            </div>




          </div>

          <div className="map">
            <Map
              address={propertydata[id]?.address}
              city={propertydata[id]?.city}
              country={propertydata[id]?.country}
            />
          </div>


        </div>

       </div>

    </div>
  )
}

export default Porperty