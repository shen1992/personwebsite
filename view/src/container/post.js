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

    componentWillMount() {
        this.props.actions.fetchList(0)
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
        this.props.actions.fetchList(pageNum).then(() => {
            local.location.query.page = pageNum
            local.replace(`/post?page=${pageNum}`)
        })
    }

    render() {
        let {postList, pageCount, count} = this.props
        if(!postList) return null
        return (
            <div>
                <header><span onClick={() => this.goToEitPost()} >写新文章</span></header>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={item._id}><Link to={`/showpost/${item._id}`}><p>{item.title}</p><span>({item.postTime})</span></Link></li>
                            )
                        })
                    }
                </ul>
                <span onClick={() => this.goToPreOrNexPage(-1)}>上一页</span>
                <span onClick={() => this.goToPreOrNexPage(1)}>下一页</span>
            </div>)
    }
}