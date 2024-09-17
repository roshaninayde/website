import React, { useState, useEffect } from 'react';
// import './Jewellery.css';
import './Jewellery.css';

const JewelleryProducts = () => {
  // const [beautyProducts, setBeautyProducts] = useState([]);
  const [JewelleryProducts, setJewelleryProducts] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data => {
        // setBeautyProducts(data);
        setJewelleryProducts(data.filter(product => product.category === 'jewelery'));
      })
  },[])

  return (
    <div className="Jewellery-products-container">
      <h2>Jewellery Products </h2>
      <ul className="products-list">
        {JewelleryProducts.map(product => (
          <li key={product.id} className="product-item">
            <div className="image-container">
              {/* Log image URL to check */}
              {console.log('Image URL:', product.image)}
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="info-container">
              <h3>{product.title}</h3>
              <p>Brand: {product.brand}</p>
              <p>Price: ₹{product.price}</p>
            </div>
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default JewelleryProducts;