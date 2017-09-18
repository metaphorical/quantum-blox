/**
 * Navigation component
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../logo';

import styles from './navigation.css';

const Navigation = function(props) { 
   return ( <div className={styles.container}>
        <nav>
            <Logo />
            <div className={styles.navbar}>
                <NavLink activeClassName={styles.active} to="/home" > Home </NavLink>
                <NavLink activeClassName={styles.active} to="/docs" > Documentation </NavLink>
                <NavLink activeClassName={styles.active} to="/examples" > Examples </NavLink>
            </div>
        </nav>
    </div> );
   };

export default Navigation;