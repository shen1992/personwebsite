/**
 * Created by shen on 2017/2/3.
 */
import ReactDom from 'react-dom'
import React from 'react'

import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'app/store/configureStore'

import Home from './home'
import Post from './post'
import Login from './login'
import EditPost from './editpost'
import ShowPost from './showpost'

const routes = (history) => (
    <Router history={history}>
        <Route path="/home" component={Home} />
        <Route path='/post' component={Post} />
        <Route path='/login' component={Login} />
        <Route path='/editpost' component={EditPost} />
        <Route path='/showpost/:post_id' component={ShowPost} />
        <Route path="*" component={Home} />
    </Router>
)

const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

ReactDom.render(
    <Provider store={store}>
        {routes(history)}
    </Provider>, document.getElementById('app')
)
