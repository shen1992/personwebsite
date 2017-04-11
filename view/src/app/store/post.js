/**
 * Created by shen on 2017/4/11.
 */
import {observable, action, useStrict} from 'mobx'
import {fetchList} from 'app/actions/post'
useStrict(true)
class Post {
    @observable pageArr
    @observable assignPost
    @observable postList
    @observable isLogin

    constructor() {
        this.postList = []
    }
    @action fetchPostList(list) {
        this.postList = list.slice()
    }
    @action fetchPostArr(arr) {
        this.pageArr = arr.slice()
    }
}

export default new Post()