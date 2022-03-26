import React from 'react';
import './Car.css'

const Car = (props) => {
    const {name,img,price} = props.car;
    const {cartHandle} =props;
    return (
        <div className="car-card">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={()=>cartHandle(props.car)} className="card-btn">Add To Cart</button>

        </div>
    );
};

export default Car;