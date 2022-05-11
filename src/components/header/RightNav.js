import React from 'react';
import './_rightNav.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";


function RightNav(props) {
    return (
            <nav >
                <ul className='header'>
                    <HamburgerMenu />
                    <li className="header__menu">
                      <Link to='/'>Main page</Link>
                    </li>
                    <li className="header__menu">
                       <Link to='/products'>Products</Link>
                    </li>
                    <li className="header__menu">
                       <Link to='/contact'>Contact</Link>
                    </li>
                    <li className='header__basket'>
                        <Link to='/basket'><FontAwesomeIcon  icon={faShoppingBasket}  /></Link>
                    </li>
                </ul>
            </nav>
    );
}

export default RightNav;