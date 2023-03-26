import React from 'react';
import logo from '../../assets/images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='header-menu'>
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/order">Order</a></li>
                    <li><a href="/inventory">Inventory</a></li>
                    <li><a href="/login">Login</a></li> 
                </ul>
            </div>
        </nav>
    );
};

export default Header;