import React from 'react'
import "./Contacts.css"
import {MdCall, MdOutlineArrowDropDown} from 'react-icons/md'
const Contacts = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">

        <div className="flexColStart c-leftt">
       
                <div className="orangeText">
                        Our Contacts    
                </div>

                <div className="primaryText">
                    Easy to contact us
                </div>

                <div className="secondaryText">
                We always ready to help by providijng the best services for you. We beleive a good place to live can make your life better
                </div>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span><span>08111120003</span>
                            </div>
                        </div>
                        <div className="flexCenter button">
                            Call Now
                        </div>
                        </div>

                        <div className="flexColCenter mode">
                            
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span><span>08111120003</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat Now
                            </div>
                            </div>

</div>
<div className="flexStart row">
                            <div className="flexColCenter mode">
                            
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span><span>08111120003</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Message Now
                            </div>
                            </div>

                            <div className="flexColCenter mode">
                            
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Email</span><span>Sales</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Send Mail
                            </div>
                            </div>
                    </div>
                </div>
        </div>

            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>



        </div>

    </section>
  )
}

export default Contacts