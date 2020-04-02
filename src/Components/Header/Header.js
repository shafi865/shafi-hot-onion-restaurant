import React from 'react';
import logo from '../../images/Icon/logo2.png';
import './Header.css';
import cart from '../../images/cart.png';

const Header = () => {
    return (
        <div className="">
            <div className="row">
                <div className="col">
                    <a href="/home">
                        <img className="logo" src={logo} alt=""/>
                    </a>
                </div>
                <div className="col">
                    <div className="header-right">
                        <div className="">
                        <a href="/cart"><img className="cart-img" src={cart} alt=""/></a>
                        <a href="/login"><button className="btn " >Login</button></a>
                        <a href="/signup"><button className="regular-btn" >Sign-up</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Header;