import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="search-container">
            <div className="row h-100">
                <div className="col col-md-12 my-auto">
                    <div className="banner-content">
                        <h1>Food You Want to Share</h1>
                        <input className="search-inp" type="text" placeholder=" Search food items" />
                        <button className="regular-btn">Search</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;