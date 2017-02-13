/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import connect from 'utils/connect'
import './login.scss'
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
            <div className="Login">
                <div className="container">
                    <div className="form row">
                        <div className="form-horizontal col-sm-offset-3 col-md-offset-3">
                            <h3 className="form-title">shen后台登录</h3>
                            <div className="col-sm-9 col-md-9">
                                <div className="form-group">
                                    <i className="fa fa-user fa-lg"></i>
                                    <input type="text" placeholder="用户名" ref="username" className="form-control required" />
                                </div>
                                <div className="form-group">
                                    <i className="fa fa-lock fa-lg"></i>
                                    <input type="password" placeholder="密码" ref="password" className="form-control required" />
                                </div>
                                <div className="form-group">
                                    <button onClick={() => this.userLogin()} className="btn btn-success pull-right">登录</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}