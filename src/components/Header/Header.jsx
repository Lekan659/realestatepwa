import React, { useState } from "react";
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () =>{
    const [menuOpened, setMenuOpened] = useState(false);
    // const headerColor = useHeaderColor();
    return(
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <Link to={"/"}>
                <img src="./logo.png" alt="logo" width={100} />
                </Link>

                <OutsideClickHandler  onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >

                
                <div style={getMenuStyles(menuOpened)} className="flexCenter h-menu">
                <NavLink to='/'>Home</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    {/* <a href="">Our Services</a> */}
                    {/* <a href="">About Us</a> */}
                    <NavLink to='/about'>About Us</NavLink>
                    
                    <button className="button">
                    <a href="mailto:customerservice@oakhomeslimited.com">Contact Us</a>
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