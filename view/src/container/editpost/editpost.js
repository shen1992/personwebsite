/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import connect from 'utils/connect'
import editSelect from 'app/selectors/editpost'
import './editpost.scss'
@connect(editSelect)

export default class EditPost extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object
    }

    componentDidMount() {
        const query = this.context.router.location.query.postId
        this.addTabText()
        if(!query)return
        this.props.actions.fetchNaturePost(query).then(() => {
            let {naturePost} = this.props
            let {title, content} = this.refs
            title.value = naturePost.title
            content.value = naturePost.content
        })
    }

    addTabText = () => {
        let {content} = this.refs
        content.addEventListener('keydown', function (e) {
            const keyCode = e.keyCode
            if(keyCode == 9) {
                const start = content.selectionStart,
                    end = content.selectionEnd,
                    value = content.value
                if(start == end) {
                    content.value = value.substring(0, start) + '\t' + value.substring(end)
                    content.selectionStart = content.selectionEnd = start + 1
                } else {
                    const lineStart = value.lastIndexOf('\n', start)
                    const lineEnd = value.lastIndexOf('\n', end)
                    const lines = value.substring(lineStart, lineEnd).split(/\n/)
                    const offset = lines.length
                    console.log('lines', lines)
                    const l = '\t' + lines.join('\n\t')
                    content.value = value.substr(0, lineStart) + l + value.substr(lineEnd)
                    content.selectionStart = start + 1
                    content.selectionEnd = end + offset
                }
                e.preventDefault()
            }
        })
    }

    commonPost = () => {
        let {title, content} = this.refs
        if(!title.value || !content.value) {
            alert('请输入完整信息')
            return
        }

        return {
            title: title.value,
            content: content.value,
            author: 'shen',
            postTime: new Date().getTime(),
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
            <div className="EditPost panel panel-info flex-column">
                <header className="panel-heading">
                    <div className="container">
                        <div className="row">
                            <input className="panel-title col-md-8" type="text" placeholder="文章标题"  ref="title" />
                            {naturePost._id ?
                                <span  className="btn btn-success pull-right col-md-2" onClick={() => this.editPost(naturePost._id )}>编辑文章</span> :
                                <span  className="btn btn-success pull-right col-md-2" onClick={() => this.sendPost()}>发表文章</span>}
                        </div>
                    </div>
                </header>
                <section className="panel-body flex-auto">
                    <textarea className="EditPost__PostHeight container" ref="content" >
                    </textarea>
                </section>
            </div>
        )
    }
}