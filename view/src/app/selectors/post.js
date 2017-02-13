/**
 * Created by shen on 2017/2/7.
 */
import {createSelector} from 'reselect'

const getPostList = state => state.post.postList
const getPostPageCount = state => state.post.pageArr
const getPostCount = state => state.post.count
const getAssignPost = state => state.post.assignPost
const getUserIsLogin = state => state.home.isLogin

export default createSelector(
    getPostList,
    getPostPageCount,
    getPostCount,
    getAssignPost,
    getUserIsLogin,
    (postList, pageArr, count, assignPost, isLogin) => {
        return {
            postList,
            pageArr,
            count,
            assignPost,
            isLogin
        }
    }
)