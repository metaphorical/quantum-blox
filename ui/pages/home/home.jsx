import React from 'react';

import CodeView from '../../components/code';

import Navigation from '../../components/navigation';

export default function() {
    return (
        <div>
            <Navigation />
            <div className="container">
                    <h1>Hi there</h1>
                    <CodeView>
                       { `constructor(props) {
                            super(props);
                            this.view = homeView;
                            this.state = {};

                        }`}
                    </CodeView>
            </div>
        </div>
    );
}