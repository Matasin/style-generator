import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

import { NAVBAR_ITEMS } from '../../constants/constants'

const Navbar = () => (
    <ul className='Navbar'>
        {NAVBAR_ITEMS.map( ({id, name, path}) => {
            return (
                <Link
                    key={id}
                    to={path}
                    className='Navbar__Item'
                >
                    {name}
                </Link>
            )
        })}
    </ul>
);
export default Navbar