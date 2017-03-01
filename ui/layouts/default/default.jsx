import React from 'react';

import Navigation from '../../components/navigation';

export default function() {
    return (
        <div>
            <Navigation />
            <h2>Counter: { this.props.globalCounter || 0}</h2>
            <div className="container">
                    { this.props.children }
            </div>
        </div>
    );
}