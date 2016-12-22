import React from 'react';
import globalStyles from '../../general-styles/global.css';

import ExampleComponent from '../../components/example';

import Navigation from '../../components/navigation';

export default function() {
    return (
            <div className="mainContent">
                <Navigation />
                <h1>Hi there</h1>
                <h2> Here is your example component </h2>
                <ExampleComponent name="Example" />
            </div>);
}