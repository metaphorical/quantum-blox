"use strict";

import React from 'react';
import defaultView from './default.jsx';

class DefaultLayout extends React.Component{
    constructor(props) {
        super(props);
        this.view = defaultView;
		this.state = {};
    }

    render() {
        return this.view();
    }
}

export default DefaultLayout;