import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { useCartContext } from '../Context/CartProvider';
//  import Carousel from './Components/Carousel';


const Home = () => {
  const { cart, addToCart, removeFromCart } = useCartContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching the products');
        console.error('Error fetching the Home:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; 
  }

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div> 
          <input
        type="text"
        placeholder="Search" 
        value={filter} 
        onChange={e => setFilter(e.target.value)}
      /> 
      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div key={item.id} className='product-container'>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto' }} />
            <h2>{item.title}</h2> 
            <p>Price: ₹{item.price}</p> 
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            {cart[item.id] > 0 && (
              <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            )}  
          </div>   
        ))}   
      </div>  
      <div className="CartProvider">    
        <h2>Cart:</h2>   
        {Object.keys(cart).map((itemId) => { 
          const product = products.find((item) => item.id === parseInt(itemId)); 
          return ( 
            <div key={itemId}> 
              <p>{product.title} x {cart[itemId]}</p>
            </div> 
          ); 
        })}
      </div>
      {/* <Carousel /> Render your Carousel component here */}
    </div>
  );
};

export default Home; 


