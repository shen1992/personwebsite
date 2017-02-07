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

@connect(HomeSelect)

export default class App extends React.Component{

    constructor(args) {
        super(...args)
    }

    render() {
        return (
            <div>
                <header><Link to="/post">我的博客</Link><Link to="/login">登录</Link></header>
            </div>
        )
    }
}



