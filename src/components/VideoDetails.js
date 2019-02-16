import React, { Component } from 'react'

class VideoDetails extends Component {

    render() {
        console.log('VIDEO DETAILS')
        if (this.props.video) {
            const { id, desc, title, img, url } = this.props.video

            return (
                <div className="video-details">
                    <video width="420" height="325">
                        <source src={url} crossorigin="anonymous" />
                    </video>
                </div>
            )
        } else {
            return (
                <div>Loaidng</div>
            )
        }
    }
}

export default VideoDetails