import React from 'react'
import "./Offers.css"
import women6 from "../Assets/women6.jpg"

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
        </div>
        <div className='offers-right'>
        <img  src={women6} alt='' />

        </div>
    </div>
  )
}

export default Offers