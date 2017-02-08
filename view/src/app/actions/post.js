/**
 * Created by shen on 2017/2/7.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'

function receiveList(postList, pageCount, count) {
    return {
        type: types.FETCH_LIST,
        postList,
        pageCount,
        count,

    }
}

export function fetchList(num) {
    return (dispatch, getState) => {
        return new GET(`/list?page=${num}`)
            .send()
            .then(resp => {
                dispatch(receiveList(resp.postList, resp.pageCount, resp.count))
            })
            .catch((error) => console.log(error))
    }
}

export function userLogin() {
    return (dispatch, getState) => {
        return new GET('/login')
            .send()
            .then(resp => {
                return resp
            })
            .catch((error) => {
                console.log(err)
            })
    }
}