import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart,clicked}=props;
   
    return (
        <div>
            <div className="container">
                <img src={cart.img} alt="" />
               <h4 className="cart-title">name: {cart.name}</h4>
            </div>
        </div>
    );
};

export default Cart;