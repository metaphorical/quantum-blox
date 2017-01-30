"use strict";

import React from 'react';
import aboutView from './about.jsx';

class About extends React.Component{
    constructor(props) {
        super(props);
        this.view = aboutView;
		this.state = {};

    }

    render() {
        return this.view();
    }
}

/**
*  Exporting a factory because it is a prefared way of calling react element
*
*  Also, directly calling react component when parsing to string (for server side rendering)
*  causes an error
*/
export default React.createFactory(About);