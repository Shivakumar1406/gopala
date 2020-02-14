import React from 'react';
import './product.css';
export const Product = props=>(
    <div className="product-container">
    <img alt="product" src="ghee.jpg"></img>
    <h1>{props.name}</h1>
    <h2>{props.price}</h2>
    </div>
)
