import React from 'react'; 
import './Cart.css'
const Cart = ({cart}) => { 

    let total = 0;
    for (const product of cart) { 
        total = total + product.price; 

    }
    return (
        <div className='order-wrapper'>
            <h2>Order Summary</h2>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping:  </p>
            <p>Tax:  </p>
        </div>
    );
};

export default Cart;