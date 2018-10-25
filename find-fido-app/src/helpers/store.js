import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {rootRed} from '../reducers/rootRed';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootRed,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);