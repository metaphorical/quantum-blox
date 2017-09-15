/**
 * 
 */
import React from 'react';
import {HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
/**
* hashHistory is used instead of browserHistory for practical reasons
* hashHistory has uglyer look to it (routes have /#/ prefix, but this routing works in basic setup, 
* even with static html file, where browserHistory requires you to set server side rendering 
* or to always return same page in your router from server)
*/

import HomePage from "./pages/home";
import DocumentationPage from "./pages/docs";
import ExamplesPage from "./pages/examples";



const App = ({ store }) => (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/docs" component={ DocumentationPage }></Route>
                        <Route path="/examples" component={ ExamplesPage }></Route>
                        <Route path="/" component={ HomePage }></Route>
                    </Switch>
                </HashRouter>
            </Provider>
                
        );

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;