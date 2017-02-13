/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import {Link} from 'react-router'
import showPostSelect from 'app/selectors/showpost'
import connect from 'utils/connect'
import './showpost.scss'
@connect(showPostSelect)

export default class ShowPost extends React.Component {
    constructor(args) {
        super(...args)
    }
    componentWillMount() {
        let {post_id} = this.props.params

        this.props.actions.fetchSinglePost(post_id)
        this.props.actions.fetchUserComment(post_id)
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
            userComment.value = ''
        })

    }
    render() {
        let {singlePost, userComment} = this.props
        return(
            <div className="ShowPost">
                <header className="ShowPost__Banner">
                    <section className="contianer">
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                <div className="post-heading">
                                    <h1 className="ShowPost__Title__Text">{singlePost.title}</h1>
                                    <h2 className="ShowPost__Title__Text">{singlePost.postTime}</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 post-container">
                    <section><div dangerouslySetInnerHTML={{__html: singlePost.content}}></div></section>
                    <section>
                        <p>用户评论</p>
                        <ol>
                            {
                                userComment.map((item) => {
                                    return (
                                        <li key={item._id}>
                                            <span>{item.commentName}</span>
                                            <span>{item.commentContent}</span>
                                            <span>{item.commentTime}</span>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </section>
                    <footer>
                        用户名：<span ref="commentName">游客</span>
                        <article>
                            评论内容:
                            <textarea ref="userComment" className="ds-textarea-wrapper ds-rounded-top" ></textarea>
                            <button className="btn btn-success" onClick={() => this.sendComment(singlePost._id)}>发表评论</button>
                        </article>
                    </footer>
                </div>
            </div>
        )
    }
}