"use strict";

/**
 * This is 404 page
 */

import React from 'react';
import defaultView from './default.jsx';
import { connect } from 'react-redux';

class DefaultPage extends React.Component{
    constructor(props) {
        super(props);
        this.view = defaultView;
		this.state = {};
    }

    render() {
        return this.view();
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(DefaultPage);
