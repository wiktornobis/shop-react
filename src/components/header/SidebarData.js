import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faTShirt, faPhone} from "@fortawesome/free-solid-svg-icons";


export const SidebarData = [
    {
        title: 'MainPage',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome} />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FontAwesomeIcon icon={faTShirt} />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FontAwesomeIcon icon={faPhone} />,
        cName: 'nav-text'
    },
]
