import React, { useState, useEffect } from 'react';
import './Women.css'; 

const WomenClothing = () => {
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    const fetchClothingData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        console.log('Fetched data:', data); 
        
        const womenClothing = data.filter(item => {
          
          return item.category && typeof item.category === 'string' && item.category.toLowerCase().includes('women');
        });
        
        console.log('Women\'s clothing:', womenClothing); 
        
        setClothingItems(womenClothing);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchClothingData();
  }, []);
console.log(clothingItems,"hhhhhh")
  return (
    <div className="women-clothing-container">
      <h2>Women's Clothing </h2>
      <ul className="clothing-list">
        {clothingItems.map(item => (
          <li key={item.id} className="clothing-item">
            <div className="image-container">
              <img src={item.image} alt={item.name} className="clothing-image" />
            </div>
            <div className="info-container"> 
              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WomenClothing;




