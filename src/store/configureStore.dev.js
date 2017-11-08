import { createStore, applyMiddleware, compose } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';

let socket = io('http://localhost:3001');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

/**
 * Entirely optional, this tiny library adds some functionality to
 * your DevTools, by logging actions/state to your console. Used in
 * conjunction with your standard DevTools monitor gives you great
 * flexibility!
 */
const logger = createLogger();

const actionCreators = {
    push
};

const router = routerMiddleware(hashHistory);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
        actionCreators,
    }) :
    compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger, router, socketIoMiddleware));

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers'))
        );
    }

  return store;
};
