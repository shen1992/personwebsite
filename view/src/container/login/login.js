/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import connect from 'utils/connect'

@connect()

export default class Login extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object
    }

    userLogin = () => {
        let {username, password} = this.refs
        const params = {
            username: username.value,
            password: password.value
        }
        this.props.actions.sendUserLogin(params).then((resp) => {
            if(resp.code === '200') {
                this.context.router.goBack()
            } else {
                alert('账号或者密码错误！')
            }
        })
    }

    render() {
        return(
            <div>
                <p>shen后台登录</p>
                <div><span>用户名：</span><input type="text" placeholder="用户名" ref="username" /></div>
                <div><span>密码：</span><input type="password" placeholder="密码" ref="password" /></div>
                <button onClick={() => this.userLogin()}>登录</button>
            </div>
        )
    }
}