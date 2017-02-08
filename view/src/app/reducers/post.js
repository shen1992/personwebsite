/**
 * Created by shen on 2017/2/7.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    list: [],
}

export default function post(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_LIST:
            return Object.assign({}, state, {list: action.list})
        default:
            return state
    }
}