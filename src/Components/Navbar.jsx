
import React from 'react'; 
import './Navbar.css';         

const Navbar = () => {
  return (  
    <nav className="navbar">   
      <div className="navbar-logo">   
        <img  
          src="https://www.creativefabrica.com/wp-content/uploads/2022/06/17/Ecommerce-Logo-Design-Graphics-32523051-1.jpg"  
          alt="Logo"
          className="navbar-logo-img"  
        />    
        MyStore                
      </div>   
      <input type="text" className="navbar-search" placeholder="Search..." /> 
              
      <div className="navbar-actions">
        <img      
          src="https://static.thenounproject.com/png/47398-200.png"   
          alt="Cart"
          className="navbar-cart"
        />  
        <button className="navbar-login-button">Login</button>
      </div> 
    </nav> 
  );  
};
 
export default Navbar;  




