"use strict";

import React from 'react';
import homeView from './home.jsx';
import { connect } from 'react-redux';

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.view = homeView;
		this.state = {};
    }

    componentDidMount() {
        const { dispatch, globalCounter } = this.props;
    }

    render() {
        return this.view();
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(HomePage);
