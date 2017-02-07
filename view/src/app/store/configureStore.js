/**
 * Created by shen on 2017/2/4.
 */
import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

let middlewares = [thunk]

let createLogger = require('redux-logger')
const logger = createLogger({
    level: 'info',
    logger: console,
    collapse: true
})

middlewares = [...middlewares, logger]

module.exports = function configureStore(history, initialState) {
    middlewares = [...middlewares, routerMiddleware(history)]
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(reducer, initialState)
}
