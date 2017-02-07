/**
 * Created by shen on 2017/2/7.
 */
import React from 'react'
import {Link} from 'react-router'
import postSelect from 'app/selectors/post'
import connect from 'utils/connect'

@connect(postSelect)

export default class Post extends React.Component {

    componentWillMount() {
        this.props.actions.fetchList()
    }
    render() {
        console.log('post', this.props.list)
        let {list} = this.props
        console.log('list', list)
        if(!list) return null
        return (
            <div>
                <header><Link to="/editpost">写新文章</Link></header>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={item._id}><p>{item.title}</p><span>{item.postTime}</span></li>
                            )
                        })
                    }
                </ul>
            </div>)
    }
}