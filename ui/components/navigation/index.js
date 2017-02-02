/**
 * Navigation component
 */

import React from 'react';
import { Link } from 'react-router';

import Logo from '../logo';

import styles from './navigation.css';

const Navigation = () => 
    <div className={styles.container}>
        <nav>
            <Logo />
            <Link activeClassName={styles.active} to="/" > Home </Link>
            <Link activeClassName={styles.active} to="/about" > About </Link>
        </nav>
    </div>

export default Navigation;