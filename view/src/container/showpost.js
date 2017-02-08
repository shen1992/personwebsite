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

        this.props.actions.fetchSinglePost(post_id)
    }
    render() {
        let {singlePost} = this.props
        return(
            <div>
                <header>
                    <p>{singlePost.title}</p>
                    <span>{singlePost.postTime}</span>
                </header>
                <section>{singlePost.content}</section>
            </div>
        )
    }
}