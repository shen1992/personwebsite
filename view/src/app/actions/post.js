/**
 * Created by shen on 2017/2/7.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'

function receiveList(list) {
    return {
        type: types.FETCH_LIST,
        list
    }
}

export function fetchList() {
    return (dispatch, getState) => {
        return new GET(`/list`)
            .send()
            .then(resp => {
                dispatch(receiveList(resp))
            })
            .catch((error) => console.log(error))
    }
}