/**
 * Created by shen on 2017/2/13.
 */
import React from 'react'
import fecha from 'fecha'
import './banner.scss'

export default ({title, time}) => {
    return (
        <div className="Banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="post-heading">
                            {
                                title ? <h1 className="ShowPost__Title__Text">{title}</h1> : null
                            }
                            {
                                time ? <h2 className="ShowPost__Title__Text">{fecha.format(new Date(time), 'YYYY年MM月DD日')}</h2> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}