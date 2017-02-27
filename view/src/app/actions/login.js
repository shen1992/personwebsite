/**
 * Created by shen on 2017/2/7.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'

export function sendUserLogin(params) {
    return (dispatch, getState) => {
        return new POST('/login', {...params})
            .send()
            .then((resp) => {
                dispatch({
                    type: types.USER_LONGIN,
                    isLogin: resp.isLogin
                })
                return resp
            })
            .catch((err) => {
                throw err
            })
    }
}