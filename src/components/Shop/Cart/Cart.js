import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    console.log(cart)
    // for(const singleCart of cart){

    // }

    return (
        <div className="cart-container">
            <h1 className="cart-title">Order Infos</h1>
            <h3>price {cart.length}</h3>
        </div>
    );
};

export default Cart;