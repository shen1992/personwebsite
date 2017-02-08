/**
 * Created by shen on 2017/2/7.
 */
import {createSelector} from 'reselect'

const getPostList = state => state.post.postList
const getPostPageCount = state => state.post.pageCount
const getPostCount = state => state.post.count

export default createSelector(
    getPostList,
    getPostPageCount,
    getPostCount,
    (postList, pageCount, count) => {
        return {
            postList,
            pageCount,
            count,
        }
    }
)