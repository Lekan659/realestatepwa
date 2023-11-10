import React from 'react'
import './Footie.css'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
const Footie = () => {
  return (
    <div className=''>
    <footer class="footer">
  	 <div class="container">
		<div className="footer-col flexColStart small">
                <img src="./logo.png" alt="" width={120}/>

                <span style={{
                    color : 'lavender'
                }} className="secondaryText">
                    {/* Our Vision is to make all people<br />
                    the best place to live for them. */}

                </span>
            </div>
  	 	<div class="innerWidth rowf">
		   <div className="footer-col flexColStart f-left">
                <img src="./logo.png" alt="" width={120}/>

                <span style={{
                    color : 'lavender'
                }} className="secondaryText">
                    {/* Our Vision is to make all people<br />
                    the best place to live for them. */}

                </span>
            </div>
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		{/* <div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div> */}
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"><FaFacebook/></i></a>
  	 				<a href="#"><i class="fab fa-twitter"><FaTwitter/></i></a>
  	 				<a href="#"><i class="fab fa-instagram"><FaInstagram/></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"><FaLinkedinIn/></i></a>
  	 			</div>
  	 		</div>
			   <div class="bottm_footer">
            <span style={{color: "#e0e0e0"}}>©2023 Oak Homes. All Rights Reserved</span>
        </div>
  	 	</div>

  	 </div>


  </footer>
    </div>
  )
}

export default Footie