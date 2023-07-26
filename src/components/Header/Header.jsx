import React from "react";
import './Header.css'
const Header = () =>{
    return(
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <div className="flexCenter h-menu">
                    <a href="">
                        Projects
                    </a>
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