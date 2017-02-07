/**
 * Created by shen on 2017/2/4.
 */
import {createSelector} from 'reselect'

const getHomeList = state => state.home.list
const getUserComment = state => state.home.userComment
const getDeleteCommentId = state => state.home.deleteId

export default createSelector(
    getHomeList,
    getUserComment,
    getDeleteCommentId,
    (list, userComment, deleteId) => {

        if(userComment._id) {
            list.push(userComment)
            console.log('list', list)
            return {
                list
            }
        }

        if(deleteId) {
            list.map((item, index) =>  {
                if(item._id === deleteId) {
                    list.splice(index, 1)
                }
            })
            return {
                list
            }
        }

        return {
            list,
            userComment
        }
    }
)
