/**
 * Created by shen on 2017/2/4.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'
export function deleteComment(id) {
    return (dispatch, getState) => {
        return new POST('/delete', {_id: id})
            .send()
            .then(resp => {
                dispatch({
                    type: types.DELETE_COMMENT,
                    _id: id
                })
            })
    }
}

