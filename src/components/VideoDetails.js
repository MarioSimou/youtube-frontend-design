import React, { Component } from 'react'
import '../css/VideoDetails.css'

class VideoDetails extends Component {

    render() {
        // condition if the video exists
        if (!this.props.selectedVideo) {
            return (
                <div>Loaidng</div>
            )
        }

        // rendering process
        const { id, desc, title } = this.props.selectedVideo

        return (
            <div className="video-details" ref={this.ref} >
                <div className="video">
                    <iframe 
                        title={ title }
                        src={ `https://www.youtube.com/embed/${id}` }
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="content">
                    <div className="title">
                        {title}
                    </div>
                    <div className="desc">
                        {desc}
                    </div>
                </div>
            </div>
        )

    }
}

export default VideoDetails