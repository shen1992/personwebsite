/**
 * Created by shen on 2017/2/4.
 */
/**
 * Created by shen on 2017/2/3.
 */
import React from 'react'
import Banner from 'comp/banner/banner.js'
import Nav from 'comp/Nav'
import {observer, inject} from 'mobx-react'
import {userLogin, userLogout} from 'app/actions/home'

@inject('homeStore')
@observer
export default class App extends React.Component{

    constructor(args) {
        super(...args)
    }

    static contextTypes = {
        router: React.PropTypes.object
    }

    componentWillMount() {
        userLogin().then(resp => {
            if(resp.isLogin) {
                this.props.homeStore.changeLogin(true)
            }
        })
    }

    goToLogin = () => {
        this.context.router.push('/login')
    }

    userLogout = () => {
        userLogout().then(resp => {
            console.log('resp', resp)
            if(resp.code == 200) {
                this.props.homeStore.changeLogin(false)
            }
        })
    }


    render() {
        let {isLogin} = this.props.homeStore
        return (
            <div className="Home">
                <Nav isLogin={isLogin} goToLogin={this.goToLogin} userLogout={this.userLogout} />
                <Banner title="努力，奋斗" />
            </div>
        )
    }
}



