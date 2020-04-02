import React from 'react';
import './Lunch.css';

const Lunch = (props) => {
    console.log(props.lunch);
    return (
        <div className="container">
        <div className="row">
            <div className="col-4 food-container">
                <img className="card-img-top" src={props.lunch.src} alt=""/>
                <div className="card-body">
                    <h5 className="card-title"> {props.lunch.name}  </h5>
                    <p className="card-text"> {props.lunch.description}</p>
                    <h4> $ {props.lunch.price} </h4>

                </div>
            </div>
            </div>
        </div>
        
                           
            
    );
};

export default Lunch;