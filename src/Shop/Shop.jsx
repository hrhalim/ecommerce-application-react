import React, { useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])  
    return (
        <div className='product-area'>
            <div className="product-left">
                <h2>Our Product</h2>
               <div className="product-wrapper">
                {
                    products.map( prodcut => <Product 
                    product = {prodcut}
                    key={prodcut.id}
                    ></Product>           
                    )
                    }
               </div>
            </div>
            <div className="product-right">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;