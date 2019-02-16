// Packages
import React, { Component } from 'react';
import youtube from '../config/axios';

// Custom components
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';
import Navbar from './Navbar';

class App extends Component {
    constructor(props) {
        super(props)
        // stack of videos related to the searched term
        this.state = { videos: [] }

        // first video of the stack
        this.selectedVideo = { video : undefined }
    }

    // rendering a set of videos when the page loads
    async componentDidMount(){
        const initialQueryTerm = 'football'
        // populates this.videos state and then first video of the stack is rendered
        await this.fetchYoutubeAPIData( initialQueryTerm )
    }

    // this routine updates the selectedVideo state whenever a user click on a youtube video
    updateSelectedVideo = ( { video } ) => {
        this.setState({ selectedVideo : video })
    }

    // this routine is executed every time that a user searches for a youtubbe video
    fetchYoutubeAPIData = async (term) => {
        // async request
        const res = await youtube.get('/search', { params: { q: term } })
        // checks request status
        if (res.status === 200 || res.status < 400) {

            // refactors the return object - only necessary properties are included
            const videos = res.data.items.map(v => ({
                id: v.id.videoId,
                desc: v.snippet.description,
                title: v.snippet.title,
                img: v.snippet.thumbnails.medium,
                publishedAt: v.snippet.publishedAt
            }))

            // updates app component state
            //  video -> new videos are loaded
            // selectedVideo -> resets the previous selection
            this.setState({ videos: videos  })

            // udpates the selected video 
            // the first video of the stack is selected
            this.updateSelectedVideo( { card : null , video : this.state.videos.shift() })
        } else {
            throw new Error('Invalid youtube request')
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Navbar fetchYoutubeAPIData={this.fetchYoutubeAPIData} />
                <div className="main">
                    <div className="left" >
                        <VideoDetails 
                            selectedVideo={ this.state.selectedVideo }
                        />
                    </div>
                    <div className="right" >
                        <VideoList 
                            videos={ this.state.videos } 
                            updateSelectedVideo={ this.updateSelectedVideo } ></VideoList>
                    </div>
                </div>
            </div>
        )
    }
}

export { App }