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
        let {list} = this.props
        if(!list) return null
        return (
            <div>
                <header><Link to="/editpost">写新文章</Link></header>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={item._id}><Link to={`/showpost/${item._id}`}><p>{item.title}</p><span>({item.postTime})</span></Link></li>
                            )
                        })
                    }
                </ul>
            </div>)
    }
}