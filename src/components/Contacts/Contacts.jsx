import React from 'react'
import "./Contacts.css"
const Contacts = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">

        <div className="flexColStart c-leftt">
       
                <div className="orangeText">
                        Our Contactst
                </div>

                <div className="primaryText">
                    Easy to contact us
                </div>

                <div className="secondaryText">
                We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better
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