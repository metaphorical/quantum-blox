import React from 'react';

import DefaultLayout from '../../layouts/default';

export default function() {
    return (
    <DefaultLayout
        globalCounter={this.props.globalCounter}
    >
            <div className="mainContent">
                <h1>Documentaion page</h1>
                <h2> QB docs will be here</h2>
            </div>
            <div className="sidebar">
                Docs Sidebar
            </div>
   </DefaultLayout>
    );
}