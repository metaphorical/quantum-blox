import React from 'react';

import DefaultLayout from '../../layouts/default';

export default function() {
    return (
        <DefaultLayout
            globalCounter={this.props.globalCounter}
        >
            <h1>Example components</h1>
            <button onClick={this.increseGlobal}>Increse</button>
            <button onClick={this.decreseGlobal}>Decrese</button>
        </DefaultLayout>
    );
}