import React from 'react';

import Navigation from '../../components/navigation';

export default function() {
    return (
        <div>
            <Navigation />
            <div className="container">
                    { this.props.children }
            </div>
        </div>
    );
}