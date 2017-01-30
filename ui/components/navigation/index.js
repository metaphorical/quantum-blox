/**
 * Navigation component
 */

import React from 'react';
import { Link } from 'react-router';

import Logo from '../logo';

import styles from './navigation.css';

const Navigation = () => 
    <nav>
        <Logo />
        <Link activeClassName={styles.active} to="/" > Home </Link>
        <Link activeClassName={styles.active} to="/about" > About </Link>
    </nav>;

export default Navigation;