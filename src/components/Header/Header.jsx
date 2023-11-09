import React, { useState } from "react";
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import { Link } from "react-scroll";


const Header = () =>{
    const [menuOpened, setMenuOpened] = useState(false);
    const[navStyle, setNavStyle] = useState("");
    const {scrollYProgress} = useScroll({

  })
    useMotionValueEvent(scrollYProgress, "change", (latest) =>{
      if (latest > 0.2){
        setNavStyle("sticky");
      }else{
        setNavStyle("")
      }
    } );

    return(
        <section className={`h-wrapper ${navStyle}`}>
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
                    {/* <a href="">Our Services</a> */}
                    {/* <a href="">About Us</a> */}
                    <NavLink to='/about'>About Us</NavLink>
                    
                    <button className="button">
                      <Link to={"c-wrapper"} spy={true} smooth={true}>
                      <a href="mailto:customerservice@oakhomeslimited.com">Contact Us</a>
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