import React from 'react'

// style
import './style.css'

const VideoDetails = props => {
    switch (props.video) {
        case undefined:
            return (<div></div>)
        default:
            const { videoId } = props.video.id
            const { title, description } = props.video.snippet

            return (
                <div className="video-details">
                    <div className="iframe-wrapper">
                        <iframe
                            title={title}
                            src={`https://www.youtube.com/embed/${videoId || props.video.id }`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="details">
                        <div className="title">
                            {title}
                        </div>
                        <div className="description">
                            {description}
                        </div>
                    </div>
                </div>
            )
    }
}

export default VideoDetails