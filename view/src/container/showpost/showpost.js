/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import showPostSelect from 'app/selectors/showpost'
import connect from 'utils/connect'
import './showpost.scss'
import Banner from 'comp/banner/banner.js'
import Nav from 'comp/Nav'
import fecha from 'fecha'
import RecentPost from 'comp/RecentPost'
import {isDevice} from 'utils/constant'
@connect(showPostSelect)

export default class ShowPost extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object
    }

    constructor(args) {
        super(...args)
    }
    componentWillMount() {
        let {post_id} = this.props.params

        this.fetchSinglePost(post_id)
        this.props.actions.fetchUserComment(post_id)
        this.props.actions.fetchRecentPost()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.params.post_id !== this.props.params.post_id) {
            this.fetchSinglePost(nextProps.params.post_id)
        }
    }

    fetchSinglePost = (id) => {
        this.props.actions.fetchSinglePost(id)
    }

    sendComment = (_id) => {
        let {userComment} = this.refs

        const params = {
            commentName: '游客',
            commentContent: userComment.value,
            commentTime: new Date().getTime(),
            type: `comment${_id}`,
        }
        this.props.actions.userSendComment(params).then(resp => {
            userComment.value = ''
        })

    }

    render() {
        let {singlePost, userComment, isLogin, recentPost} = this.props
        return(
            <div className="ShowPost">
                <Nav isLogin={isLogin} />
                <Banner title={singlePost.title} time={singlePost.postTime} />
                <div className="container flex-column ">
                    <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-12 post-container flex">
                        <section><div dangerouslySetInnerHTML={{__html: singlePost.content}}></div></section>
                        {
                            isDevice() && <RecentPost recentPost={recentPost} />
                        }
                    </div>
                    {
                        userComment.length ? <section className="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-xs-12">
                                <p>用户评论</p>
                                <ol className="ShowPost__Comment">
                                    {
                                        userComment.map((item) => {
                                            return (
                                                <li key={item._id}>
                                                    <span>{item.commentName}</span>
                                                    <span>{item.commentContent}</span>
                                                    <sapn>{fecha.format(new Date(item.commentTime), 'YYYY年MM月DD日')}</sapn>
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            </section> : null
                    }
                    <footer className="ShowPost__Footer col-lg-7 col-lg-offset-1 col-md-7 col-md-offset-1 col-xs-12">
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