import React, { useState } from "react";
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import { Link } from "react-scroll";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"

const Header = () =>{
    const [menuOpened, setMenuOpened] = useState(false);
    const[navStyle, setNavStyle] = useState("");
    const {scrollYProgress} = useScroll({

  })
  const [open,openchange]=useState(false);
  const functionopenpopup=()=>{
      openchange(true);
  }
  const closepopup=()=>{
      openchange(false);
  }
    useMotionValueEvent(scrollYProgress, "change", (latest) =>{
      if (latest > 0.2){
        setNavStyle("sticky");
      }else{
        setNavStyle("")
      }
    } );

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return(
        <section className={`h-wrapper ${navStyle}`}>
          <Dialog
            // fullScreen 
            open={open} onClose={closepopup} fullWidth maxWidth="sm">
                <DialogTitle>User Registeration  <IconButton onClick={closepopup} style={{float:'right'}}><CloseIcon color="primary"></CloseIcon></IconButton>  </DialogTitle>
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
            <div className="flexCenter paddings innerWidth h-container">
                <NavLink to={"/"}>
                <img src="./logo.png" alt="logo" width={100} />
                </NavLink>

                <OutsideClickHandler  onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >

                
                <div style={getMenuStyles(menuOpened)} className="flexCenter h-menu">
                <NavLink to='/'>Home</NavLink>
                    <NavLink to='/projects'>Properties</NavLink>
                    <div className="dropdown">
      <a className="dropbtn">Dropdown</a>
      <div className="dropdown-content">
      <NavLink to='/projects'>Past Projects</NavLink>
      <NavLink to='/currentprojects'>Current Projects</NavLink>
      </div>
    </div>
                    {/* <a href="">Our Services</a> */}
                    {/* <a href="">About Us</a> */}
                    <NavLink to='/about'>About Us</NavLink>
                    
                    <button className="button">
                      <Link onClick={functionopenpopup} to={"c-wrapper"} spy={true} smooth={true}>
                      <a  >Contact Us</a>
                      {/* href="mailto:customerservice@oakhomeslimited.com" */}
                      </Link>

                    </button>
                    
                </div>

                </OutsideClickHandler>

                                    {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
                
            </div>


        </section>
    )
}

export default Header