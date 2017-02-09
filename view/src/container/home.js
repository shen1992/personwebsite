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
        this.state = {
            isLogin: false
        }
    }

    componentWillMount() {
        this.props.actions.userLogin()
            .then(resp => {
                if(resp.code === '200') {
                    this.setState({
                        isLogin: true
                    })
                }
            })
    }

    render() {
        return (
            <div>
                <header><Link to={`/post?page=0`}>我的博客</Link>
                    <Link to="/login"><span>{ this.state.isLogin ? '已登录' : '登录' }</span></Link>
                </header>
            </div>
        )
    }
}



