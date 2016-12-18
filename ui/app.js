/**
 * 
 */
import React from 'react';
import {Route, Router, hashHistory} from 'react-router';

import Navigation from './navigation';

import Home from "./pages/home";


const About = () => <div><Navigation /><h1>This is your about page</h1></div>;


class App extends React.Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ Home }></Route>
                <Route path="/about" component={ About }></Route>
            </Router>
                
        );
    }
}

export default React.createFactory(App);