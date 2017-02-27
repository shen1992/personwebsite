/**
 * Created by shen on 2017/2/20.
 */
import {Link} from 'react-router'
import React from 'react'
import './recentPost.scss'
export default ({recentPost}) => {
    return (
        <section className="RecentPost col-md-4">
            <p className="RecentPost__Title">最近文章</p>
            <ol>
                {
                    recentPost.map(item => {
                        return (
                            <li key={item._id} className="RecentPost__Item" >
                                {
                                    <Link to={`/showPost/${item._id}`}>{item.title}</Link>
                                }
                            </li>
                        )
                    })
                }
            </ol>
        </section>
    )
}