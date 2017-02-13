/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import {Link} from 'react-router'
import postSelect from 'app/selectors/post'
import connect from 'utils/connect'
import './post.scss'
@connect(postSelect)

export default class Post extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object
    }

    constructor(args) {
        super(...args)
        this.state = {
            showAssignPost: false
        }
    }

    componentWillMount() {
        const page = this.props.router.location.query.page
        this.props.actions.fetchList(page)
    }

    goToEitPost = () => {
        if(this.props.isLogin) {
            this.context.router.push('/editpost')
            return
        }
        alert('请先登录')
        this.context.router.push('/login')
    }
    goToPreOrNexPage = (num) => {
        let page = parseInt(this.props.router.location.query.page)
        let local = this.props.router
        const pageNum = page + parseInt(num)
        if(pageNum > (this.props.pageArr.length - 1) || pageNum < 0)return
        this.props.actions.fetchList(pageNum).then(() => {
            local.location.query.page = pageNum
            local.replace(`/post?page=${pageNum}`)
        })
    }

    goToAssignPage = (num) => {
        this.props.actions.fetchList(num).then(() => {
            let local = this.props.router
            local.location.query.page = num
            local.replace(`/post?page=${num}`)
        })
    }

    deletePost = (_id) => {
        this.props.actions.deletePost(_id).then(resp => {
            this.state.postList.map((item, index) => {
                if(item._id === _id) {
                    this.state.postList.splice(index, 1)
                    this.setState({
                        postList: this.state.postList
                    })
                }
            })
        })
    }

    findAssignPost = () => {
        let {postTitle} = this.refs
        if(!postTitle.value)return
        this.props.actions.findAssignPost(postTitle.value).then(() => {
            if(this.props.assignPost.length) {
                this.setState({ showAssignPost: true })
            }
        })
    }

    resetAssignPost = () => {
        this.props.actions.resetAssignPost().then(() => {
            this.setState({
                showAssignPost: false
            })
        })
    }

    render() {
        let {pageArr, assignPost, postList, isLogin} = this.props
        return (
            <div>
                <header className="navbar navbar-inverse container-fluid row">
                    <div className="navbar-form">
                        <div className="input-group col-md-3">
                            <input type="text" placeholder="请输入文章的标题" ref="postTitle" className="form-control" />
                            <span onClick={() => this.findAssignPost()} className="input-group-addon">查询</span>
                        </div>
                        <button className="btn btn-success pull-right" onClick={() => this.goToEitPost()} >写新文章</button>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1col-sm-12 col-xs-12 post-container">
                            {
                                this.state.showAssignPost ? <article className="flex">
                                                                <p style={{marginRight: '5px'}}>查询结果</p><p onClick={() => this.resetAssignPost()}>关闭</p>
                                                            </article> : null
                            }
                            {
                                this.state.showAssignPost ? (assignPost.length ? assignPost.map(item => {
                                    return (
                                        <Link to={`/showpost/${item._id}`} key={item._id} className='flex' >
                                            <p>{item.title}</p>
                                            <span>({item.postTime})</span>
                                        </Link>
                                    )
                                }) : '没有找到该文章') : null

                            }
                            <ul>
                                {
                                    postList.map((item, index) => {
                                        return (
                                            <li key={item._id}>
                                                <Link to={`/showpost/${item._id}`}>
                                                    <p style={{fontSize: '26px'}}>{item.title}</p>
                                                </Link>
                                                { isLogin ? <Link to={`/editpost?postId=${item._id}`} style={{marginRight: '5px'}}>编辑</Link> : null}
                                                { isLogin ? <span onClick={() => this.deletePost(item._id)}>删除</span> : null}
                                                <p>shen by {item.postTime}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="flex flex-center">
                                <ul className="pagination">
                                    <li onClick={() => this.goToPreOrNexPage(-1)}><a>上一页</a></li>
                                    {
                                        pageArr.map((item, index) => {
                                            return <li key={index} onClick={() => this.goToAssignPage(index)}><a>{index + 1}</a></li>
                                        })
                                    }
                                    <li className="next" onClick={() => this.goToPreOrNexPage(1)}><a>下一页</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )
    }
}