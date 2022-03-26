import React, { useEffect, useState } from 'react';
import Car from './Car/Car';
import Cart from './Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [cars,setCars]=useState([]);
    const [cart,setCart]=useState([]);
    const [pick,setPick]=useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCars(data))

    },[])

    const cartHandle = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }
    const clicked = (cart) =>{
        // console.log('clicked');
        const newCart = [];
        setCart(newCart);

        
    }
    const picked = (product) =>{
        const randomValue = product[Math.floor(product.length * Math.random())];
        // randomValue.map(value => console.log(value))
        setPick(randomValue);
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
              <h3 className="order-title">Order Details</h3>
             <div>
             {
                 cart.map(singleCart => <Cart key={singleCart.id} cart={singleCart} clicked={clicked} picked={picked}></Cart>)
             }
             </div>
             <button onClick={() => picked(cart)} className="btn">Pick One</button>
             <button onClick={()=>clicked(cart)} className="btn">Reset</button>
             
             <div className="picked">
                 
                <h4>Your Picked Item</h4>
                <div className="pick">
                    <img src={pick.img} alt="" />
                    <h4>{pick.name}</h4>
                </div>
             </div>
          </div>
        </div>
    );
};

export default Shop;