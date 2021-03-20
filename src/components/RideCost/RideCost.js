import React from 'react';
import Header from '../Header/Header';
import Map from '../../images/Map.png'
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../Data/Data.json';
import RideCostExpand from '../RideCostExpand/RideCostExpand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute } from '@fortawesome/free-solid-svg-icons'


const RideCost = () => {
    const [cost, setCost] = useState([]);
    useEffect(() => {
        setCost(fakeData);
    }, [])

    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-md-6">
                    <div className="col-md-12 p-4">
                        <div className="d-flex justify-content-center bg-primary">
                        <div className="col-md-6 p-2 text-center ">
                        <FontAwesomeIcon className="fa-3x" icon={faRoute}/>
                        </div>
                        <div className="col-md-6 text-left">
                            <h4>Mirpur</h4>
                            <h4>Gulisthan</h4>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        {
                            cost.map(costs => <RideCostExpand costs={costs}></RideCostExpand>)
                        }
                    </div>

                </div>
                <div className="col-md-6">
                    <img src={Map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RideCost;