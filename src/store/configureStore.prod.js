import { createStore, applyMiddleware, compose } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

let socket = io();
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const finalCreateStore = compose(
    applyMiddleware(thunk, socketIoMiddleware)
)(createStore);

module.exports = function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
};
