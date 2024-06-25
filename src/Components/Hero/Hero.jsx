import React from 'react';
import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import heroimg1 from "../Assets/heroimg1.avif";
const Hero = () => {
  return (
    <div className='hero'>
    <div className='hero-left'>
    <h2>NEW ARRIVALS ONLY</h2>
    <div>
       <div className='hero-hand-icon'>
        <p>new</p>
       </div>
       <p>collections</p>
       <p>for everyone</p> 
    </div>
    <div className='hero-latest-btn'>
        <div>Latest Collection</div>
        <FaLongArrowAltRight />
    </div>
    </div>
    <div className='hero-right'>
    <img src={heroimg1}  alt='hero'/>
    </div>

    </div>
  )
}

export default Hero