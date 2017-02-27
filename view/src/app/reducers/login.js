/**
 * Created by shen on 2017/2/15.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    isLogin: false
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case types.USER_LONGIN:
            return Object.assign({}, state, {isLogin: action.isLogin})
        default:
            return state
    }
}