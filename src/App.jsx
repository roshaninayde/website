
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import ProductList from './Components/productList';
import Cart from './Components/Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]); 

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <Navbar />
      <ProductList addItemToCart={addItemToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> 
    </div>
  );
};

export default App;


