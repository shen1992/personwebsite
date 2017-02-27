/**
 * Created by shen on 2017/2/7.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    singlePost: [],
    userComment: [],
    recentPost: [],
}

export default function showpost(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_SINGLE_POST:
            return Object.assign({}, state, {singlePost: action.post})
        case types.FETCH_USER_COMMENT:
            return Object.assign({}, state, {userComment: action.userComment,})
        case types.SEND_COMMENT:
            return {
                ...state,
                userComment: [
                    ...state.userComment,
                    ...action.sendComment

                ]
            }
        case types.FETCH_RECENT_POST:
            return Object.assign({}, state, {recentPost: action.recentPost})
        default:
            return state
    }
}