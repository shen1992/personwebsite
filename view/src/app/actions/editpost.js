/**
 * Created by shen on 2017/2/7.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'

export function sendPost(option) {
    return (dispatch, getState) => {
        return new POST('/create', {...option})
            .send()
            .then(resp => {
                return resp
            })
            .catch((err) => {
                throw err
            })
    }
}

export function fetchNaturePost(_id) {
    return (dispatch, getState) => {
        return new GET(`/naturePost?_id=${_id}`)
            .send()
            .then(resp => {
                dispatch({
                    type: types.FETCH_NATURE_POST,
                    naturePost: resp,
                })
            })
    }
}

export function editPost(params) {
    return (dispatch, getState) => {
        return new POST('/updatePost', {...params})
            .send()
            .catch(err => {
                throw err
            })
    }
}