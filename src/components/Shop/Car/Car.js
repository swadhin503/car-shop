import React from 'react';
import './Car.css'

const Car = (props) => {
    console.log(props.car)
    const {name,img,price} = props.car;
    return (
        <div className="car-card">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button className="card-btn">Add To Cart</button>

        </div>
    );
};

export default Car;