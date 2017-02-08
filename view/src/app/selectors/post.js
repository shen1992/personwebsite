/**
 * Created by shen on 2017/2/7.
 */
import {createSelector} from 'reselect'

const getPostList = state => state.post.list

export default createSelector(
    getPostList,
    (list) => {
        return {
            list,
        }
    }
)