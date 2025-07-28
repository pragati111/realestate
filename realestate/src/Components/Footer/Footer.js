import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/*left side*/}
            <div className="flexColStart f-left">
                <img src="./logo.jpg" alt="" width={120}/>
                <span className='secondaryText'>
                  Our vision is to help you by providing the best properties in your area.
                </span>
            </div>
            {/*right side*/}
            <div className="flexColStart f-right">
              <span className="primaryText">Information</span>
              <span className='secondaryText'>Banglore, Karnataka</span>
              <div className="flexCenter f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About Us</span>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
