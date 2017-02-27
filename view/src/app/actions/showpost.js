/**
 * Created by shen on 2017/2/7.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'

export function fetchSinglePost (params) {
    return (dispatch, getState) => {
        let url = `/singlepost?_id=${params}`
        return new GET(url)
            .send()
            .then((resp) => {
                dispatch({
                    type: types.FETCH_SINGLE_POST,
                    post: resp
                })
            })
    }
}

export function userSendComment(params) {
    return (dispatch, getState) => {
        return new POST(`/userComment`, {...params})
            .send()
            .then(resp => {
               dispatch({
                   type: types.SEND_COMMENT,
                   sendComment: resp.doc
               })
            })
            .catch(err => {
                throw err
            })
    }
}

export function fetchUserComment(_id) {
    return (dispatch, getState) => {
        return new GET(`/userComment?_id=${_id}`)
            .send()
            .then(resp => {
                dispatch({
                    type: types.FETCH_USER_COMMENT,
                    userComment: resp
                })
            })
            .catch(err => {
                throw err
            })
    }
}

export function fetchRecentPost() {
    return (dispatch, getState) => {
        return new GET('/recentPost')
            .send()
            .then(resp => {
                dispatch({
                    type: types.FETCH_RECENT_POST,
                    recentPost: resp
                })
            })
    }
}