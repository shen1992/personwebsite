/**
 * Created by shen on 2017/2/9.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
   naturePost: []
}

export default function editPost(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_NATURE_POST:
            return Object.assign({}, state, {naturePost: action.naturePost})
        default:
            return state
    }
}