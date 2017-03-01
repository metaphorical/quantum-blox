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

export default DocumentationPage;