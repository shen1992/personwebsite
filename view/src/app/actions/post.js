/**
 * Created by shen on 2017/2/7.
 */
import * as types from 'app/constants/ActionTypes'
import {GET, POST} from 'utils/request'
import {postStore} from 'app/store'

export function fetchList(num) {
    return new GET(`/list?page=${num}`)
        .send()
        .then(resp => {
            postStore.fetchPostList(resp.postList)
            postStore.fetchPostArr(resp.pageArr)
        })
        .catch((error) => console.log(error))
}

export function deletePost(id) {
    return new POST('/delete', {_id: id})
        .send()
        .then(resp => {
        })
}

export function findAssignPost(title) {
    return new GET(`/findPost?title=${title}`)
        .send()
        .then((resp) => {
        })
}

export function resetAssignPost() {
    return new Promise(reslove => {
        if(true) {
            reslove('success !')
        }
    })
}