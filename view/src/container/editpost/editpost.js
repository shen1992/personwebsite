/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import connect from 'utils/connect'
import editSelect from 'app/selectors/editpost'

@connect(editSelect)
export default class EditPost extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object
    }

    componentDidMount() {
        const query = this.context.router.location.query.postId
        if(!query)return
        this.props.actions.fetchNaturePost(query).then(() => {
            let {naturePost} = this.props
            let {title, content} = this.refs
            title.value = naturePost.title
            content.value = naturePost.content
        })
    }

    commonPost = () => {
        let {title, content} = this.refs
        if(!title.value || !content.value) {
            alert('请输入完整信息')
            return
        }
        let date = new Date()
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        let d = date.getDate()

        return {
            title: title.value,
            content: content.value,
            author: 'shen',
            postTime: `${y}年${m}月${d}日`,
            type: 'post',
        }
    }

    sendPost = () => {
        const params = this.commonPost()
        this.props.actions.sendPost(params).then(resp => {
            if(resp.code === '200') {
                this.context.router.goBack()
            }
        })
    }

    editPost = (_id) => {
        const params = this.commonPost()
        Object.assign(params, {_id})
        this.props.actions.editPost(params).then((resp) => {
            if(resp.code === '200') {
                this.context.router.goBack()
            }
        })

    }

    render() {
        let {naturePost} = this.props

        return (
            <div className="panel panel-info">
                <header className="panel-heading">
                    <input className="panel-title" type="text" placeholder="文章标题"  ref="title" />
                    {naturePost._id ?
                        <span  className="btn btn-success pull-right" onClick={() => this.editPost(naturePost._id )}>编辑文章</span> :
                        <span  className="btn btn-success pull-right" onClick={() => this.sendPost()}>发表文章</span>}
                </header>
                <section className="panel-body">
                    <textarea className="container" ref="content" >
                    </textarea>
                </section>
            </div>
        )
    }
}