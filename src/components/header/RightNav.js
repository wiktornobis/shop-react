import React from 'react';
import './_rightNav.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";


function RightNav({cartItems}) {
    return (
            <nav >
                <ul className='header'>
                    <HamburgerMenu />
                    <li className="header__menu">
                      <Link to='/'>Home</Link>
                    </li>
                    <li className="header__menu">
                       <Link to='/products'>Products</Link>
                    </li>
                    <li className="header__menu">
                       <Link to='/about-us'>About us</Link>
                    </li>
                    <li className="header__menu">
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='header__basket'>
                        <Link to='/basket'>
                            <FontAwesomeIcon  icon={faShoppingBasket}  />
                            <span className="header__basket--length">
                                {cartItems.length === 0 ? '' : cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
    );
}

export default RightNav;