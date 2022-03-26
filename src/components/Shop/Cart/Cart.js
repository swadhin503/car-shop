import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    // console.log(picked);
   
    return (
        <div>
            <div className="container">
                <img src={cart.img} alt="" />
               <h4 className="cart-title">name: {cart.name}</h4>
               {/* <h1>Your Picked One</h1> */}
            </div>
        </div>
    );
};

export default Cart;