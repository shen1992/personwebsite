/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import {Link} from 'react-router'
import showPostSelect from 'app/selectors/showpost'
import connect from 'utils/connect'

@connect(showPostSelect)

export default class ShowPost extends React.Component {
    componentWillMount() {
        let {post_id} = this.props.params
        const params = {
            _id: post_id
        }
        this.props.actions.fetchSinglePost(params)
    }
    render() {
        return(
            <div>
                <header></header>
                <section>hahahaha</section>
            </div>
        )
    }
}