import React, { useState } from 'react';
import './Food.css';
import food from '../../../src/foodData.js';
import Lunch from '../Lunch/Lunch';



const Food = () => {
    const food6 = food.slice(0,6);
    const [foods, setFoods] = useState(food6);
    
    console.log(food6);
    return (
        <div className="container">
            <div className="choose-container">
                <div className="row">
                
                    <div className="catagories m-auto py-5">
                        <ul className="d-flex">
                            <a href="/breakfast"><button className="btn">breakfast</button></a>
                            <a href="/lunch"><button className="btn">Lunch</button></a>
                            <a href="/dinner"><button className="btn">Dinner</button></a>
                            <div className="all"><a href=""><button className="btn">See All</button></a></div>
                        </ul>
                       
                    </div>
                </div>
            </div>
            <div className="food-container">
        
                {
                    foods.map(fd => <Lunch lunch={fd}></Lunch> )
                }
            
            </div>
            <div className="checkout">
                <button className="checkout-btn"> Checkout Your Food</button>
            </div>
            
            
        </div>
    );
};

export default Food;