import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {

    render() {
        return (
            <div className="video-list" onClick={ this.findSelectedVideo } >
                {
                    this.props.videos.map( ( video , i ) => {
                        return (
                            <VideoItem 
                                    index={ i }
                                    key={ video.id } 
                                    video={video}
                                    updateSelectedVideo={ this.props.updateSelectedVideo } 
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default VideoList