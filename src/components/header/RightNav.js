import React from 'react';
import './_rightNav.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket, faBars} from "@fortawesome/free-solid-svg-icons";

function RightNav(props) {
    return (
        <div className='header'>
            <a href='/' className="header__menu">Main page</a>
            <a href='products.html' className="header__menu">Products</a>
            <a href='contact.html' className="header__menu">Contact</a>
            <FontAwesomeIcon className='header__basket' icon={faShoppingBasket} />
            <FontAwesomeIcon className='bars' icon={faBars} />
        </div>
    );
}

export default RightNav;