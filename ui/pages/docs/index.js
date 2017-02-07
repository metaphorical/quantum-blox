"use strict";

import React from 'react';
import documentationView from './docs.jsx';

class DocumentationPage extends React.Component{
    constructor(props) {
        super(props);
        this.view = documentationView;
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
export default DocumentationPage;