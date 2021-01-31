import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'videos/lms-system-demo.mov'
            width='50%'
            height='50%'
            controls = {true}
            />
        </div>
        )
    }
}

export default Video;