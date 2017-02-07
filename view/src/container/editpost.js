/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import connect from 'utils/connect'
@connect()
export default class EditPost extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object
    }

    sendPost = () => {
        let {title, content} = this.refs
        if(!title.value || !content.value) {
            alert('请输入完整信息')
            return
        }
        let date = new Date()
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        let d = date.getDate()
        const params = {
            title: title.value,
            content: content.value,
            author: 'shen',
            postTime: `${y}年${m}月${d}日`
        }
        this.props.actions.sendPost(params).then(resp => {
            if(resp.code === '200') {
                this.context.router.goBack()
            }
        })
    }

    render() {
        return (
            <div>
                <header><input type="text" placeholder="文章标题"  ref="title" /><span onClick={() => this.sendPost()}>发表文章</span></header>
                <section>
                    <textarea name="" id="" cols="30" rows="10" ref="content" ></textarea>
                </section>
            </div>
        )
    }
}