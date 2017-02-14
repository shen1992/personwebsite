/**
 * Created by shen on 2017/2/4.
 */
/**
 * Created by shen on 2017/2/3.
 */
import React from 'react'
import connect from 'utils/connect'
import HomeSelect from 'app/selectors/home'
import {Link} from 'react-router'
import Banner from 'components/banner/banner.js'

@connect(HomeSelect)

export default class App extends React.Component{

    constructor(args) {
        super(...args)
    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    componentWillMount() {
        this.props.actions.userLogin()
    }

    goToLogin = () => {
        this.context.router.push('/login')
    }

    userLogout = () => {
        this.props.actions.userLogout()
    }


    render() {
        let {isLogin} = this.props
        return (
            <div className="Home">
                <nav className="navbar navbar-inverse navbar-custom navbar-fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand pull-left">上善若水</a>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="pull-right">
                                {
                                    isLogin ? <a href=""><span onClick={() => this.userLogout()}>已登录</span></a> : <a><span onClick={() => this.goToLogin()}>登录</span></a>
                                }
                            </li>
                            <li className="pull-right">
                                <Link to={`/post?page=0`}>我的博客</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Banner title="生命诚可贵，coding价更高" />
            </div>
        )
    }
}



