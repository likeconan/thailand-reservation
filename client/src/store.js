import { applyMiddleware, createStore } from 'redux'

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"
import Config from 'config';

var middleware;
if (Config.ifDEV) {
    middleware = applyMiddleware(promise(), thunk, logger())
} else {
    middleware = applyMiddleware(promise(), thunk)
}

export default createStore(reducer, middleware)
