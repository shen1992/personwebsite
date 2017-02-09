/**
 * Created by shen on 2017/2/7.
 */
import {createSelector} from 'reselect'

const getSinglePost = state => state.showpost.singlePost
const getUserComment = state => state.showpost.userComment


export default createSelector(
    getSinglePost,
    getUserComment,
    (singlePost, userComment) => {
        return {
            singlePost,
            userComment,
        }
    }
)