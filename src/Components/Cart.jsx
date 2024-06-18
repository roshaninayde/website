import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <>
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p></p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <p>{item.name} - ${item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
        </>
    );
}; 

export default Cart;

