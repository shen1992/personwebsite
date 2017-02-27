/**
 * Created by shen on 2017/2/16.
 */
import {Link} from 'react-router'
import React from 'react'
import './nav.scss'
export default ({isLogin, userLogout, goToLogin}) => {
    return (
        <nav className="navbar navbar-default navbar-custom Nav">
            <div className="container-fluid">
                <Link  to='/' className="navbar-brand pull-left">上善若水</Link>
                <ul className="nav navbar-nav navbar-right">
                    <li className="pull-right">
                        {
                            isLogin ? <a href=""><span onClick={() => userLogout()}>已登录</span></a> : <Link to='/login'>登录</Link>
                        }
                    </li>
                    <li className="pull-right">
                        <Link to={`/post?page=0`}>我的博客</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}