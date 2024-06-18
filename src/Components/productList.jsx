import React, { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const cores = ("cores")

    useEffect(() => {
        axios.get('https://flipcartbackend-exgs.onrender.com/data')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="Product-list">
            {products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}

            {/* {products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))} */}  
        </div>
    );  
};
 
export default ProductList;























// // useEffect(() => {
// //     axios.get('https://flipcartbackend-exgs.onrender.com/data')
// //         .then(response => setProducts(response.data))
// //         .catch(error => console.error('Error fetching products:', error));
// // }, []);

// // return (
// //     <div className="Product-list">
// //         {/* {products.map(product => (
// //             <Product key={product.id} product={product} addToCart={addToCart} />
// //         ))} */}
// //     </div>
// // ); 


// import React, { useState, useEffect } from 'react';
// import Product from './Product';
// import axios from 'axios';

// const ProductList = ({ addToCart }) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         axios.get('https://flipcartbackend-exgs.onrender.com/data')
//             .then(response => setProducts(response.data))
//             .catch(error => console.error('Error fetching products:', error));
//     }, []);

//     return (
//         <div className="Product-list">
//             {products.map(product => (
//                 <Product key={product.id} product={product} addToCart={addToCart} />
//             ))}
//         </div>
//     ); 
// };
 
// export default ProductList;





