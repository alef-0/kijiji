import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
    render() {
        console.warn(store);
        const { store } = this.props;
        const history = syncHistoryWithStore(hashHistory, store);

        return (
            <Provider store={store}>
                    <Router history={history} routes={routes}/>
            </Provider>
        );
    }
};
