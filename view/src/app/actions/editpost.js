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