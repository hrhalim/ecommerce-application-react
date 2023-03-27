import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import Product from '../components/Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    

    const shopHandlar = (prodcut) => {
        const newCart = [...cart, prodcut]
        setCart(newCart);
    }
 
    return (
        <div className='product-area'>
            <div className="product-left">
                <h1>Our Product</h1>
               <div className="product-wrapper">
                {
                    products.map( prodcut => <Product 
                    product = {prodcut}
                    key={prodcut.id}
                    shopHandlar={shopHandlar}
                    ></Product>           
                    )
                    }
               </div>
            </div>
            <div className="product-right">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;