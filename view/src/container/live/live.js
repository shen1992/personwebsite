/**
 * Created by shen on 2017/2/28.
 */
import React from 'react'
import connect from 'utils/connect'

// @connect()

export default class Live extends React.Component {
    handleFile = () => {
        let {file, preImg, word} = this.refs
        const oneWord = word.value
        const fileList = file.files
        for(let i = 0; i < fileList.length; i++) {
            let img = new Image()
            img.src = fileList[i].name
            preImg.appendChild(img)
        }
        let formData = new FormData()
        formData.append('fileList', '123')
        console.log(formData.append('fileList', fileList))
        this.props.actions.sendOneLive(formData)

    }
    render () {
        return (
            <div className="Live">
                <input type="file" multiple="multiple" ref="file" name="photos" />
                <input type="text" placeholder="说点什么吧...." ref="word" />
                <section>
                    <div className="Live__PreImg" ref="preImg" ></div>
                </section>
                <button onClick={() => this.handleFile()} >提交</button>
            </div>
        )
    }
}