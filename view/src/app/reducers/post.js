/**
 * Created by shen on 2017/2/7.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    postList: [],
    count: 0,
    pageCount: 0,
}

export default function post(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_LIST:
            return Object.assign({}, state, {
                postList: action.postList,
                count: action.count,
                pageCount: action.pageCount
            })
        default:
            return state
    }
}