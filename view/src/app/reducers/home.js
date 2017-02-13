/**
 * Created by shen on 2017/2/4.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    isLogin: false
}

export default function home(state = initialState, action) {
    switch (action.type) {
        case types.IS_LOGIN:
            return Object.assign({}, state, {isLogin: action.isLogin})
        default:
            return state
    }
}