import React, { Component } from 'react';

class VideoList extends Component {
    render() {
        return (
            <div className="video-list">
                {this.props.children}
            </div>
        )
    }
}

export default VideoList