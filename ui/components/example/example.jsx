import React from 'react';

import styles from './example.css';

export default function() {
    return (
        <div className={styles.container} >
            <h1>Hello, {this.props.name}</h1>
        </div>);
}