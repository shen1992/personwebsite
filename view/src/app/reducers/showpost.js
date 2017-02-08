/**
 * Created by shen on 2017/2/7.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    singlePost: [],
}

export default function showpost(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_SINGLE_POST:
            return Object.assign({}, state, {singlePost: action.post})
        default:
            return state
    }
}