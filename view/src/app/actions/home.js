/**
 * Created by shen on 2017/2/4.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'

export function userLogin() {
    return (dispatch, getState) => {
        return new GET('/login')
            .send()
            .then(resp => {
                dispatch({
                    type: types.IS_LOGIN,
                    isLogin: resp.isLogin
                })
            })
            .catch((error) => {
                console.log(err)
            })
    }
}

export function userLogout() {
    return (dispatch, getState) => {
        return new POST(`/logout`)
            .send()
            .then((resp) => {
                dispatch({
                    type: types.IS_LOGOUT,
                    isLogin: res.isLogin
                })
            })
    }
}

