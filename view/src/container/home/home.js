/**
 * Created by shen on 2017/2/4.
 */
/**
 * Created by shen on 2017/2/3.
 */
import React from 'react'
import connect from 'utils/connect'
import HomeSelect from 'app/selectors/home'
import Banner from 'comp/banner/banner.js'
import Nav from 'comp/Nav'

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
                <Nav isLogin={isLogin} goToLogin={this.goToLogin} userLogout={this.userLogout} />
                <Banner title="努力，奋斗" />
            </div>
        )
    }
}



