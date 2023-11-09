import React, { useState } from 'react';
import "./Contacts.css"
import {MdCall, MdMessage, MdOutlineArrowDropDown, MdPlace} from 'react-icons/md'
import { MdEmail, MdLocalPhone } from 'react-icons/md';
const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">

        <div className="flexColStart c-leftt">
       
                <div className="orangeText">
                        Our Contacts    
                </div>

                <div className="primaryText">
                    Get In Touch
                </div>

                <div className="secondaryText">
                We are always ready to help by providing the best services for you. We beleive a good place to live can make your life better
                </div>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>08111120003</span>
                            </div>
                        </div>
                        {/* <div className="flexCenter button">
                            Call Now
                        </div> */}
                        </div>

                        </div>
<div className="flexStart row">

                        <div className="flexColCenter mode">
                            
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdMessage size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>08111120003</span>
                                </div>
                            </div>
                            {/* <div className="flexCenter button">
                                Chat Now
                            </div> */}
                            </div>

</div>
<div className="flexStart row">
                            <div className="flexColCenter mode">
                            
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdPlace size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>No 4 Ribadu Road Ikoyi, Lagos</span>
                                </div>
                            </div>
                            {/* <div className="flexCenter button">
                                Message Now
                            </div> */}
                            </div>

                            </div>
<div className="flexStart row">

                            <div className="flexColCenter mode">
                            
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdEmail size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>info@oakhomeslimited.com</span>
                                </div>
                            </div>
                            {/* <div className="flexCenter button">
                            <a href="mailto:customerservice@oakhomeslimited.com">Send Mail</a>
                            </div> */}
                            </div>
                    </div>
                </div>
        </div>

            <div className=" c-right">
            <div className="orangeText">
                        
                </div>

                {/* <div className="primaryText">
                Schedule An Appointment with us
                </div> */}

                <div className="secondaryText">
                </div>
                <form className="formes" action="">
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
            </div>



        </div>

    </section>
  )
}

export default Contacts