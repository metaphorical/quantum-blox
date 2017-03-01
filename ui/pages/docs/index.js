"use strict";

import React from 'react';
import documentationView from './docs.jsx';
import { connect } from 'react-redux';

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

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(DocumentationPage);