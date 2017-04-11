/**
 * Created by shen on 2017/2/3.
 */
import ReactDom from 'react-dom'
import React from 'react'

import { Router, Route, browserHistory} from 'react-router'
import {Provider} from 'mobx-react'
import configureStore from 'app/store/configureStore'
import * as stores from 'app/store'
import 'sass/index.scss'
// import Home from 'react-proxy-loader?name=Home!./home'
// import Post from 'react-proxy-loader?name=Post!./post'
// import Login from 'react-proxy-loader?name=Login!./login'
// import EditPost from 'react-proxy-loader?name=EditPost!./editpost'
// import ShowPost from 'react-proxy-loader?name=ShowPost!./showpost'

import Home from './home/home'
import Post from './post/post'
import Login from './login/login'
import EditPost from './editpost/editpost'
import ShowPost from './showpost/showpost'
import Live from './live/live'

ReactDom.render(
    <Provider {...stores}>
        <Router history={browserHistory} >
            <Route path="/home" component={Home} />
            <Route path="/post" component={Post} />
            <Route path="/login" component={Login} />
            <Route path="/editpost" component={EditPost} />
            <Route path="/showpost/:post_id" component={ShowPost} />
            <Route path='/live' component={Live} />
            <Route path="*" component={Home} />
        </Router>
    </Provider>,
    document.getElementById('app')
)