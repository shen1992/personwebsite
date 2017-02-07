/**
 * Created by shen on 2017/2/7.
 */
import {createSelector} from 'reselect'

const getHomeList = state => state.home.list

export default createSelector(
    getHomeList,
    (list) => {
        return {
            list,
        }
    }
)