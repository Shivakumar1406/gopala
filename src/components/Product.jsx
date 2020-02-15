import React from 'react';
import './product.css';
export const Product = props=>(
    <div className="product-container">
    <img alt="product" src="ghee.jpg"></img>
    <button className="bt"><h2>Add to cart</h2></button>

    <h1>{props.name}</h1>
    <h2>{props.price}</h2>
    </div>
)
