/**
 * Created by shen on 2017/2/7.
 */
import {createSelector} from 'reselect'

const getSinglePost = state => state.showpost.singlePost
const getUserComment = state => state.showpost.userComment
const getUserLogin = state => state.home.isLogin
const getRecentPost = state => state.showpost.recentPost


export default createSelector(
    getSinglePost,
    getUserComment,
    getUserLogin,
    getRecentPost,
    (singlePost, userComment, isLogin, recentPost) => {
        return {
            singlePost,
            userComment,
            isLogin,
            recentPost,
        }
    }
)