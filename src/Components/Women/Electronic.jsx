import React, { useState, useEffect } from 'react';
import './Electronics.css';

const Electronics = () => {
  const [ElectronicsItems, setElectronicsItems] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data => {
        // setBeautyProducts(data);
        setElectronicsItems(data.filter(product => product.category === 'electronics'));
      })
  },[])

  return (
    <div className="Electronics-container">
      <h2>Electronics</h2>
      <ul className="products-list"> 
        {ElectronicsItems.map(item => (
          <li key={item.id} className="product-item">
            <div className="image-container">
              <img src={item.image} alt={item.title} className="product-image" />
            </div> 
            <div className="info-container">
              <h3>{item.title}</h3>
              <p>Category: {item.category}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Electronics; 



