import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { CartContext } from './CartContext'; // Adjust the path if CartContext.js is in a subdirectory
// import { CartProvider } from './CartProvider';
import { CartProvider } from './Context/CartProvider';
import Navbar from './Components/Navbar'; 
import Jewellery from './Components/Women/Jewellery';  
import MenClothing from './Components/Women/Men';
// import Electronic from './Components/Women/Electronic';
import Home from './Components/Home';
import WomenClothing from './Components/Women/Women';
// import './Navbar.css'; 

const App = () => {
  return (  
    <CartProvider> 
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route path="home" element={<Home />} />
          <Route path="women" element={<WomenClothing />} />
          <Route path="jewellery" element={<Jewellery />} />
          {/* <Route path="electronic" element={<Electronic />} /> */}
          <Route path="men" element={<MenClothing />} />
          <Route path="cartProvider" element={<CartProvider  />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}; 

export default App;



