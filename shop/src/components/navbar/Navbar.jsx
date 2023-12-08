import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { MdOutlinePerson2 } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Cart  from '../Cart/Cart'

import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  const [open,setOpen] = useState(false)


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <IoIosArrowDown />
          </div>
          <div className="item">
            <span>USD</span>
            <IoIosArrowDown />
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">Openhemier Store</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <IoMdSearch size={23}/>
            <MdOutlinePerson2 size={23}/>
            <FaRegHeart size={23}/>
            <div className="cartIcon"  onClick={()=>setOpen(!open)}>
              <FiShoppingCart size={23}/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
