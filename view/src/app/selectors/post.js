/**
 * Created by shen on 2017/2/7.
 */
import {createSelector} from 'reselect'

const getPostList = state => state.post.postList
const getPostPageCount = state => state.post.pageArr
const getPostCount = state => state.post.count
const getAssignPost = state => state.post.assignPost

export default createSelector(
    getPostList,
    getPostPageCount,
    getPostCount,
    getAssignPost,
    (postList, pageArr, count, assignPost) => {
        return {
            postList,
            pageArr,
            count,
            assignPost,
        }
    }
)