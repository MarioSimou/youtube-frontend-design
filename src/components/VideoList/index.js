import React from 'react'

// components
import VideoItem from '../VideoItem'

// style
import './style.css'

const VideoList = props =>{
    const { videos } = props

    return (
        <div className="video-list">
            { 
                 videos.map( v => {
                     return (
                         <div key={ v.id.videoId }>
                            <VideoItem video={ v.snippet } id={ v.id.videoId } />
                         </div>
                     )
                 })
            }
        </div>
    )
}

export default VideoList