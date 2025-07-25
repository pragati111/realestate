import React from 'react'
import './Extra.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

function Extra() {
  return (
    <section className="extra-wrapper">
        <div className="padding innerwidth flexCenter extra-container">
            <div className="flexColStart extra-left">
              <div className="extra-title">
                <div className="blueCircle"></div>
                <h1>
                  Discover <br/> Most Perfect <br /> Property
                </h1>
              </div>
              <div className="flexColStart extra-des">
                <span>Find beautiful properties that suite you the best</span>
                <span>You will not face any difficulties in finding the best residence for you.</span>
              </div>
              <div className="flexCenter search-bar">
                <HiLocationMarker color="blue" size={25}>                  
                </HiLocationMarker>
                <input type="text" />
                <button className="button">Search</button>
              </div>
              <div className="flexCenter stats">
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={8500} end={9000} duration={4}/>
                    <span>+</span>
                    </span>
                    
                    <span >Premium Properties</span>
                </div>
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={50} end={90} duration={4}/>
                    <span>+</span>
                    </span>
                    
                    <span>Happy Customers</span>
                </div>
                <div className="flexColCenter stat">
                  <span>
                    <CountUp start={10} end={15} duration={4}/>
                    <span>+</span>
                    </span>
                    
                    <span>Award Winning</span>
                </div>
              </div>
            </div>
            <div className="flexCenter extra-right">
            <div className="image-container">
                <img src="./mainimage.jpg" alt="main image" />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Extra
