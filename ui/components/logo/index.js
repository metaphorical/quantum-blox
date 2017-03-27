import React from 'react';

import styles from './logo.css';

const Logo = function(props) {
    return (
        <div className={styles.container}>
            <div className={styles.logo + (props.styleClass || "")} ></div>
            <h1>Quantum blox</h1>
            <h2>Fast prototyping, production ready modular UI boilerplate</h2>
        </div>);
};

export default Logo;