/**
 * Created by shen on 2017/2/4.
 */
import {createSelector} from 'reselect'

const getHomeLogin = state => state.home.isLogin

export default createSelector(
    getHomeLogin,
    (isLogin) => {
        return {
            isLogin,
        }
    }
)
