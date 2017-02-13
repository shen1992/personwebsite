/**
 * Created by shen on 2017/2/7.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    postList: [],
    count: 0,
    pageArr: [],
    assignPost: [],
}

export default function post(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_LIST:
            return Object.assign({}, state, {
                postList: action.postList,
                count: action.count,
                pageArr: action.pageArr
            })
        case types.FIND_ASSIGN_POST:
            return Object.assign({}, state, {assignPost: action.assignPost})
        case types.RESET_ASSIGN_POST:
            return Object.assign({}, state, {assignPost: []})
        default:
            return state
    }
}