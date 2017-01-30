import React from 'react';
import globalStyles from '../../general-styles/global.css';

import ExampleComponent from '../../components/example';

import Navigation from '../../components/navigation';

export default function() {
    return (
            <div className="mainContent">
                <Navigation />
                <h1>About page</h1>
                <h2> This is your about page </h2>
            </div>);
}