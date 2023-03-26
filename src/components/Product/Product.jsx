import React from 'react';
import './Product.css'

const Product = (props) => { 
    const {img, name, ratings, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="Product" />
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <h4>Rating: {ratings}</h4>
        </div>
    );
};

export default Product;