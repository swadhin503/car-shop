import React, { useEffect, useState } from 'react';
import Car from './Car/Car';
import Cart from './Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [cars,setCars]=useState([]);
    const [cart,setCart]=useState([]);
    // const [card,setCards]=useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCars(data))

    },[])

    const cartHandle = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
        // const randomValue = newCart[Math.floor(newCart.length * Math.random())];
        // console.log(randomValue);
        // clicked(randomValue);
    }
    // const clicked = (product) =>{
    //     console.log(product)
    // }

    return (
      <div className="shop-container">
         <div className="cars-container">
            {
                cars.map(car => <Car 
                key={car.id}
                car={car}
                cartHandle={cartHandle}
                ></Car>)
            }.
          </div>

          <div className="cart-container">
              <h3 className="order-title">Order Details</h3>
             <div>
             {
                 cart.map(singleCart => <Cart key={singleCart.id} cart={singleCart}></Cart>)
             }
             </div>
             <button className="btn">Pick One</button>
             <button className="btn">Reset</button>
          </div>
        </div>
    );
};

export default Shop;