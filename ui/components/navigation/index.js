/**
 * Navigation component
 */

import React from 'react';
import { Link } from 'react-router';

import Logo from '../logo';

import styles from './navigation.css';

const Navigation = () => 
   ( <div className={styles.container}>
        <nav>
            <Logo />
            <div className={styles.navbar}>
                <Link activeClassName={styles.active} to="/" > Home </Link>
                <Link activeClassName={styles.active} to="/docs" > Documentation </Link>
                <Link activeClassName={styles.active} to="/examples" > Examples </Link>
            </div>
        </nav>
    </div> );

export default Navigation;