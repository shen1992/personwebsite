/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import {Link} from 'react-router'
import postSelect from 'app/selectors/post'
import connect from 'utils/connect'

@connect(postSelect)

export default class Post extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object
    }

    constructor(args) {
        super(...args)
        this.state = {
            postList: []
        }
    }

    componentWillMount() {
        const page = this.props.router.location.query.page
        this.props.actions.fetchList(page).then(() => {
            this.setState({
                postList: this.props.postList
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.postList.length !== nextProps.postList.length) {
            this.setState({
                postList: nextProps.postList
            })
        }
    }

    goToEitPost = () => {
        this.props.actions.userLogin()
            .then(resp => {
                if(resp.code === '200') {
                    this.context.router.push('/editpost')
                } else {
                    alert('请先登录')
                    this.context.router.push('/login')
                }
            })
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
        this.props.actions.findAssignPost(postTitle.value)
    }

    render() {
        let {pageArr, assignPost} = this.props
        let {postList} = this.state
        if(!postList) return null
        return (
            <div>
                <header className="navbar navbar-inverse">
                    <button className="btn btn-success pull-right" onClick={() => this.goToEitPost()} >写新文章</button>
                    <input type="text" placeholder="请输入文章的标题" ref="postTitle" className="input-medium search-query" />
                    <button onClick={() => this.findAssignPost()} className="btn">查询</button>
                </header>
                <div className="container">
                    {
                        assignPost.length ? <p>查询结果</p> : null
                    }
                    {
                        assignPost.map(item => {
                            return (
                                <Link to={`/showpost/${item._id}`} key={item._id}>
                                    <p>{item.title}</p>
                                    <span>({item.postTime})</span>
                                </Link>
                            )
                        })

                    }
                    <ol>
                        {
                            postList.map((item, index) => {
                                return (
                                    <li key={item._id}>
                                        <Link to={`/showpost/${item._id}`}>
                                            <p>{item.title}</p>
                                            <span>({item.postTime})</span>
                                        </Link>
                                        <Link to={`/editpost?postId=${item._id}`}>编辑</Link>
                                        <span onClick={() => this.deletePost(item._id)}>删除</span>
                                    </li>
                                )
                            })
                        }
                    </ol>
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
          )
    }
}