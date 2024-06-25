import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo.jpg"
import { FaInstagram, FaPinterestP, FaWhatsapp  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
        <img className='logoo' src={footer_logo} alt=''/>
        <p>LEXIWEARS</p>
        </div>
        <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
        <div className='footer-icons-container'>
        <FaInstagram />
        </div>
        <div className='footer-icons-container'>
        <FaPinterestP />
        </div>
        <div className='footer-icons-container'>
        <FaWhatsapp />
        </div>
        </div>
        <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer