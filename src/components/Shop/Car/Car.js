import React from 'react';

const Car = (props) => {
    console.log(props.car)
    const {name,id,img,price} = props.car;
    return (
        <div className="car-card">
            <img src={img} alt="" />
            <h2>Showing Cars: {name}</h2>
        </div>
    );
};

export default Car;