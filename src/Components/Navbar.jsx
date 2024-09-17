import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './myntralogo.jpeg';
import Search from './background.jpg';
const Navbar = () => {
  return (
    <div>
      <div className="nav_container">
        <div className="logo img">
          <img src={logo} alt="Myntra Logo" /> 
          <p>Logo</p>
        </div>
   {/* {
           <input
        type="text"
        placeholder="Search"
       value={Search}
       onChange={e => Search(e.target.value)}
  /> } */}


        <div className="menu"> 
          <ul>
            <li><Link to="/women" className="navbar-link">Women</Link></li>
            <li><Link to="/men" className="navbar-link">Men</Link></li>
            {/* <li><Link to="/electronics" className="navbar-link">Electronics</Link></li> */}
            <li><Link to="/jewellery" className="navbar-link">Jewellery</Link></li>
            <li><Link to="/home" className="navbar-link">Home</Link></li>
            <li><Link to="/cart" className="navbar-link">Cart</Link></li>
          </ul>
        </div>
        <div className="search">
          {/* <input type="text" placeholder="Enter keyword" className="search-bar" /> */}
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Navbar;



