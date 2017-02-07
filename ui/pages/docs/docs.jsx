import React from 'react';
import globalStyles from '../../general-styles/global.css';

import ExampleComponent from '../../components/example';

import Navigation from '../../components/navigation';

export default function() {
    return (
            <div className="container">
                <Navigation />
                <div className="mainContent">
                    <h1>Documentaion page</h1>
                    <h2> QB docs will be here</h2>
                </div>
                <div className="sidebar">
                    Docs Sidebar
                </div>
            </div>);
}