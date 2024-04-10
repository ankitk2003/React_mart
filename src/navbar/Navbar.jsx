// import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Account from "../components/Account/account";
import style from "./Navbar.module.css";
import Contact from "../components/navbar/contact/contact";
import Home from '../components/home/home';
import Electronics from '../2-components/electronics';
import Clothing from '../2-components/clothing';
import { BsCart4 } from "react-icons/bs";
import Cart from '../components/cart/cart';

function Navbar() { 
  return (
    <div>
        {/* <Router> */}
      <div className={style.navbar}>
        <nav>
          <ul>
            <li><h2>ReactCart</h2></li>
            <li><Link to="/">Home</Link></li>
            <li>Account</li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>

            <li><Link to="/signin" ><button type="submit">Sign-In</button></Link></li>
            {/* <li><BsCart4/></li> */}
          </ul>
        </nav>
      </div>
        <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/signin" element={<Account/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/electronics"element={<Electronics/>}></Route>
        <Route path="/cart"element={<Cart/>}></Route>
        <Route path="/clothing"element={<Clothing/>}></Route>
        </Routes> 
        {/* </Router> */}
    </div>
  );
}

export default Navbar;
