import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faCoffee } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {  
    const {img, name, ratings, price, seller } = props.product;
     
    const shopHandlar = props.shopHandlar;

    return (
        <div className='product'>
            <img src={img ? img : "No found Image"} alt="Product" />
            <div className="prodcut-content">
                <h2>{name}</h2>
                <h3>Price: {price}</h3>
                <h4>Menufacture: {seller}</h4>
                <h5>Rating: {ratings}</h5> 
            </div>
            <button onClick={() => shopHandlar(props.product)} className='btn-cart'>
                Add To Cart  <FontAwesomeIcon icon={faBasketShopping} />
                
                </button>
        </div>
    );
};

export default Product;