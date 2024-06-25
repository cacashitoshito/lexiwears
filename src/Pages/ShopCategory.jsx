import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext';
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '../Components/Item/item';

const ShopCategory = ({banner, category}) => {
  const {AllProduct_Data} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={banner} alt="banner"/>
      <div className='shopcategory-indexSort'>
        <p><span>Showing 1-12</span>out of 36 products</p>
      <div className='shopcategory-sort'>
      sort by <IoIosArrowDropdown/>
      </div>
      </div>
      <div className='shopcategory-products'>
      {AllProduct_Data.map(item =>(category === item.category ? (
             <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price}
             old_price={item.old_price}
             />
      ):null
        
      ))}

      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory