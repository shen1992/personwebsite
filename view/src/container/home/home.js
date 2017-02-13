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

    componentWillMount() {
        this.props.actions.userLogin()
    }

    render() {
        let {isLogin} = this.props
        return (
            <div>
                <header className="navbar navbar-inverse navbar-static-top">
                    <div className="container">
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to={`/post?page=0`}>我的博客</Link>
                                </li>
                                <li>
                                    <Link to="/login"><span>{ isLogin ? '已登录' : '登录' }</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <Banner />
            </div>
        )
    }
}



