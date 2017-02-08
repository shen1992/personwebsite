/**
 * Created by shen on 2017/2/4.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import home from './home'
import post from './post'
import showpost from './showpost'

const rootReducer = combineReducers({
    home,
    post,
    showpost,
    routing: routerReducer
})

export default rootReducer