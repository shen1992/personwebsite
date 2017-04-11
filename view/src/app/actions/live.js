/**
 * Created by shen on 2017/3/1.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'

export function sendOneLive(param, option) {
    return (dispatch, getState) => {
        return new POST(`/file-upload`, param, option)
            .send()
            .then(() => {
                // dispatch({
                //     type: types.SEND_ONE_LIVE
                // })
            })
    }
}