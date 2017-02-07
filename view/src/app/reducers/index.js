/**
 * Created by shen on 2017/2/4.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import home from './home'
import post from './post'

const rootReducer = combineReducers({
    home,
    post,
    routing: routerReducer
})

export default rootReducer