/**
 * Created by shen on 2017/2/4.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'

export function userLogout() {
    return new POST(`/logout`)
        .send()
        .then((resp) => {
            return resp
        })
}

export function userLogin() {
    return new GET('/login')
        .send()
        .then()
        .catch((error) => {
            console.log(err)
        })
}

