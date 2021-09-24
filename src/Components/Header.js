import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

const header = () => {
    return (
        <div className="header">
            <div className="header-img">
                <img src={logo} alt="" />
            </div>
            <nav>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/shop">Shop</a>
            </nav>
            <div className="search">
                <input type="search"placeholder="search product..."/>
                <button>search</button>
            </div>
        </div>
    );
};

export default header;