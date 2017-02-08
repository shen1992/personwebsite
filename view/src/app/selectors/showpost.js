/**
 * Created by shen on 2017/2/7.
 */
import {createSelector} from 'reselect'

const getSinglePost = state => state.showpost.singlePost

export default createSelector(
    getSinglePost,
    (singlePost) => {
        return {
            singlePost,
        }
    }
)