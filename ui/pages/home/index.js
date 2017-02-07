"use strict";

import React from 'react';
import homeView from './home.jsx';

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.view = homeView;
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
export default HomePage;