import React from 'react';

import styles from './sample.css';

const SampleView = function(props) {
    return (
        <div className={styles.container}>
            Hi from stateless
        </div>);
};

export default SampleView;