import React from 'react'
import './Breadcrum.css';
import { IoIosArrowDropdown } from "react-icons/io";
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <IoIosArrowDropdown /> SHOP <IoIosArrowDropdown /> {product.category} <IoIosArrowDropdown /> {product.name}
         
    </div>
  )
}

export default Breadcrum