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