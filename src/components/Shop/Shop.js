import React, { useEffect, useState } from 'react';
import Car from './Car/Car';
import Cart from './Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [cars,setCars]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCars(data))

    },[])

    const cartHandle = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }

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
             <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;