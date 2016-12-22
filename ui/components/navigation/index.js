/**
 * Navigation component
 */

import React from 'react';
import { Link } from 'react-router';

import styles from './navigation.css';

const Navigation = () => 
    <nav>
        <Link activeClassName={styles.active} to="/" > Home </Link>
        <Link activeClassName={styles.active} to="/about" > About </Link>
    </nav>;

export default Navigation;