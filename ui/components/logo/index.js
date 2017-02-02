import React from 'react';

import styles from './logo.css';

const Logo = function(props) {
    return (<div className={styles.logo + (props.styleClass || "")} >
            </div>);
}

export default Logo;