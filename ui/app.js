/**
 * 
 */
import React from 'react';
import { HashRouter, Route, Switch , Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import HomePage from "./pages/home";
import DefaultPage from "./pages/default";
import DocumentationPage from "./pages/docs";
import ExamplesPage from "./pages/examples";



const App = ({ store }) => (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/docs" component={ DocumentationPage }></Route>
                        <Route path="/examples" component={ ExamplesPage }></Route>
                        <Route path="/home" component={ HomePage }></Route>
                        <Route exact path="/" >
                            <Redirect to="/home"/>
                        </Route>
                        <Route component={ DefaultPage }></Route>
                    </Switch>
                </HashRouter>
            </Provider>
                
        );

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;