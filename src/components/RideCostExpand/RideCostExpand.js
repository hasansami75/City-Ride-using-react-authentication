import React from 'react';
import './RideCostExpand.css'

const RideCostExpand = (props) => {
    console.log(props);
    const {rideName , image , capacity ,cost} = props.costs;
    return (
        <div className="col-md-12 mb-3">
            <div className="bg-light p-3">
            <img className="d-inline-block vehicle-img"  src={image} alt=""/>
            <h4 className="d-inline-block mx-5">{rideName}</h4>
            <p className="d-inline-block mx-2">{capacity}</p>
            <p className="d-inline-block mx-2">{cost}</p>
            </div>
        </div>
        
    );
};

export default RideCostExpand;