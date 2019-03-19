import React from 'react'

// components
import VideoDetails from '../VideoDetails'
import VideoList from '../VideoList'

// style
import './style.css'

const Main = props => {

    return (
        <div className="main">
            <VideoDetails video={props.videos[0]} />
            <VideoList videos={props.videos.slice(1)} />
        </div>
    )
}

export default Main