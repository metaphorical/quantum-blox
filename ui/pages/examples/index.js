"use strict";

import React from 'react';
import examplesView from './examples.jsx';
import { connect } from 'react-redux';

import { incrementGlobal, decrementGlobal } from '../../data/actions/example';
import { fetchHotGames } from '../../data/actions/bgg';

class ExamplesPage extends React.Component{
    constructor(props) {
        super(props);
        this.view = examplesView;
		this.state = {};
        this.increseGlobal = this.increseGlobal.bind(this);
        this.decreseGlobal = this.decreseGlobal.bind(this);
        this.fetchGames = this.fetchGames.bind(this);
    }

    increseGlobal() {
        const { dispatch } = this.props;
        dispatch(incrementGlobal());
    }
    decreseGlobal() {
        const { dispatch } = this.props;
        dispatch(decrementGlobal());
    }
    fetchGames() {
        const { dispatch } = this.props;
        dispatch(fetchHotGames());
    }

    render() {
        return this.view();
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(ExamplesPage);
