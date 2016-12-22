/**
 * 
 */
import React from 'react';
import {Route, Router, hashHistory} from 'react-router';
/**
* hashHistory is used instead of browserHistory for practical reasons
* hashHistory has uglyer look to it (routes have /#/ prefix, but thsi routing works in basic setup, 
* even with static html file, where browserHistory requires you to set server side rendering 
* or to always return same page in your router from server)
*/

import Navigation from './components/navigation';

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