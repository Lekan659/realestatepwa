import React from "react";
import './Header.css'
import { Link, NavLink } from "react-router-dom";
const Header = () =>{
    return(
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <Link to={"/"}>
                <img src="./logo.png" alt="logo" width={100} />
                </Link>
                <div className="flexCenter h-menu">
                    <NavLink to='/projects'>Projects</NavLink>
                    <a href="">Our Services</a>
                    <a href="">About Us</a>
                    
                    <button className="button">
                    <a href="">Contact Us</a>
                    </button>
                    
                </div>
            </div>
        </section>
    )
}

export default Header