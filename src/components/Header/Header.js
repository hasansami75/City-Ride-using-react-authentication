import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import Home from '../Home/Home';
import Rides from '../Rides/Rides';
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="#">Urban Riders</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto">
                            <Link to="/home" class="nav-link active" aria-current="page" href="#">Home</Link>
                            <Link to="/destination" class="nav-link active" href="#">Destination</Link>
                            <Link to="/blog" class="nav-link active" href="#">Blog</Link>
                            <Link to="/contact" class="nav-link active" href="#">Contact</Link>
                            <Link to="/login"><button class="btn btn-outline-success me-2" type="button">Login</button> </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;