/**
 * 
 */
import React, { PropTypes } from 'react';
import {Route, Router, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
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
                <Router history={ hashHistory }>
                    <Route path="/" component={ HomePage }></Route>
                    <Route path="/docs" component={ DocumentationPage }></Route>
                    <Route path="/examples" component={ ExamplesPage }></Route>
                </Router>
            </Provider>
                
        );

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;