import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../Data/Data.json';
import Header from '../Header/Header';
import Map from '../../images/Map.png'
import { Link } from 'react-router-dom';

const RideDetails = () => {
    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-md-4 bg-light">
                    <div className="mb-3 mt-3">
                        <p>Pick From</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="mb-3">
                        <p>Pick To</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="mb-3">
                        <form>
                            <p>Choose Date</p>
                            <input type="date" id="birthday" name="birthday"></input>
                        </form>
                    </div>
                    <div class="ml-5 mb-3">
                   <Link to="/rideCost"> <button type="button" class="btn btn-primary btn-lg">Search</button></Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={Map} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default RideDetails;