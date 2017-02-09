/**
 * Created by shen on 2017/2/9.
 */
import {createSelector} from 'reselect'

const getNaturePost = state => state.editPost.naturePost


export default createSelector(
    getNaturePost,
    (naturePost) => {
        console.log('naturePost', naturePost)
        return {
            naturePost
        }
    }
)
