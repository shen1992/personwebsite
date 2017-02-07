/**
 * Created by shen on 2017/2/4.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    list: [],
    userComment: {},
    deleteId: '',
}

export default function home(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_LIST:
            return Object.assign({}, state, {list: action.list})
        case types.SEND_COMMENT:
            return Object.assign({}, state, {userComment: action.userComment})
        case types.DELETE_COMMENT:
            return Object.assign({}, state, {deleteId: action._id})
        default:
            return state
    }
}