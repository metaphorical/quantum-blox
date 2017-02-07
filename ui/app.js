/**
 * 
 */
import React from 'react';
import {Route, Router, hashHistory} from 'react-router';
/**
* hashHistory is used instead of browserHistory for practical reasons
* hashHistory has uglyer look to it (routes have /#/ prefix, but this routing works in basic setup, 
* even with static html file, where browserHistory requires you to set server side rendering 
* or to always return same page in your router from server)
*/

import Navigation from './components/navigation';

import HomePage from "./pages/home";
import DocumentationPage from "./pages/docs";


class App extends React.Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ HomePage }></Route>
                <Route path="/docs" component={ DocumentationPage }></Route>
            </Router>
                
        );
    }
}

export default App;