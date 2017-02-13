/**
 * Created by shen on 2017/2/7.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'

function receiveList(postList, pageArr, count) {
    return {
        type: types.FETCH_LIST,
        postList,
        pageArr,
        count,

    }
}

export function fetchList(num) {
    return (dispatch, getState) => {
        return new GET(`/list?page=${num}`)
            .send()
            .then(resp => {
                dispatch(receiveList(resp.postList, resp.pageArr, resp.count))
            })
            .catch((error) => console.log(error))
    }
}

export function deletePost(id) {
    return (dispatch, getState) => {
        return new POST('/delete', {_id: id})
            .send()
            .then(resp => {
                return resp
            })
    }
}

export function findAssignPost(title) {
    return (dispatch, getState) => {
        return new GET(`/findPost?title=${title}`)
            .send()
            .then((resp) => {
                dispatch({
                    type: types.FIND_ASSIGN_POST,
                    assignPost: resp
                })
            })
    }
}

export function resetAssignPost() {
    return (dispatch, getState) => {
        return new Promise(reslove => {
            if(dispatch({type: types.RESET_ASSIGN_POST})) {
                reslove('success !')
            }
        })
    }
}