import React from 'react';
import globalStyles from '../../general-styles/global.css';

import ExampleComponent from '../../components/example';

import Navigation from '../../components/navigation';

export default function() {
    return (
        <div>
            <Navigation />
            <div className="container">
                    <h1>Hi there</h1>
            </div>
        </div>
    );
}