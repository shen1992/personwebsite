/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import {Link} from 'react-router'
import showPostSelect from 'app/selectors/showpost'
import connect from 'utils/connect'

@connect(showPostSelect)

export default class ShowPost extends React.Component {
    constructor(args) {
        super(...args)
        this.state = {
            commentState : []
        }
    }
    componentWillMount() {
        let {post_id} = this.props.params

        this.props.actions.fetchSinglePost(post_id)
        this.props.actions.fetchUserComment(post_id).then(resp => {
            this.setState({
                commentState: this.props.userComment
            })
        })
    }
    sendComment = (_id) => {
        let {userComment} = this.refs
        let date = new Date()
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        let d = date.getDay()

        const params = {
            commentName: '游客',
            commentContent: userComment.value,
            commentTime: `${y}年${m}月${d}日`,
            type: `comment${_id}`,
        }
        this.props.actions.userSendComment(params).then(resp => {
            this.setState({
                commentState: this.state.commentState.concat(resp.doc)
            })
        })

    }
    render() {
        let {singlePost} = this.props
        let {commentState} = this.state
        return(
            <div>
                <header>
                    <p>{singlePost.title}</p>
                    <span>{singlePost.postTime}</span>
                </header>
                <section><div dangerouslySetInnerHTML={{__html: singlePost.content}}></div></section>
                <section>
                    <p>用户评论</p>
                    <ul>
                        {
                            commentState.map((item) => {
                                return (
                                    <li key={item._id}>
                                        <span>{item.commentName}</span>
                                        <span>{item.commentContent}</span>
                                        <span>{item.commentTime}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <footer>
                    用户名：<span ref="commentName">游客</span>
                    <article>
                        评论内容:
                        <textarea name="" id="" cols="30" rows="10" ref="userComment" ></textarea>
                        <span onClick={() => this.sendComment(singlePost._id)}>发表评论</span>
                    </article>
                </footer>
            </div>
        )
    }
}