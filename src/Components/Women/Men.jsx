
// import React, { useState, useEffect } from 'react';
// import './Men.css'; 

// const MenClothing = () => {
//   const [clothingItems, setClothingItems] = useState([]);

//   useEffect(() => {
    
//     const fetchClothingData = async () => {
//       try {
      
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setClothingItems(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
    
//     };

//     fetchClothingData();
//   }, []);

//   return (
//     <div className="men-clothing-container">
//       <h2>Men's Clothing</h2>
//       <ul className="clothing-list">
//         {clothingItems.map(item => (
//           <li key={item.id} className="clothing-item">
//             <div className="image-container">
//               <img src={item.image} alt={item.name} className="clothing-image" />
//             </div>
//             <div className="info-container">
//               <h3>{item.name}</h3>
//               <p>Category: {item.category}</p>
//               <p>Price: ₹{item.price}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MenClothing;

import React, { useState, useEffect } from 'react';
import './Men.css';

const MenClothing = () => {
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    const fetchClothingData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        const menClothingItems = data.filter(product => product.category === "men's clothing");
        setClothingItems(menClothingItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchClothingData();
  }, []);

  return (
    <div className="men-clothing-container">
      <h2>Men's Clothing</h2>
      <ul className="clothing-list">
        {clothingItems.map(item => (
          <li key={item.id} className="clothing-item">
            <div className="image-container">
              <img src={item.image} alt={item.title} className="clothing-image" />
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

export default MenClothing;
