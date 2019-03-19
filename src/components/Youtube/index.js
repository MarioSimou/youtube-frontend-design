import React, { Component } from 'react'
import { youtubeSearch , youtubeVideo } from '../../config/youTube'

// components
import Navbar from '../Navbar'
import Main from '../Main'

// style
import './style.css'

class Youtube extends Component {
    constructor(props) {
        super(props)
        this.state = { videos: [], displayed: this.props.match.params.id }
    }

    updateState = async v => {
        // fetch resource
        const youtubeVideos = await youtubeSearch.get('/search', { params: { q : v } })
        // update state
        this.setState({ videos: youtubeVideos.data.items })
    }

    loadVideo = async v => {
        // fetch resource
        const matchedVideo = await youtubeVideo.get('/videos', { params: { id : v } })
        const relatedVideos = await youtubeSearch.get('/search', { params: { relatedToVideoId : v  , type : 'video' } })
        // update state
        this.setState({ videos: [ ...matchedVideo.data.items , ...relatedVideos.data.items.slice( 0 , -1 ) ] })
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.loadVideo( id )
    }
    componentDidUpdate() {
        const { id } = this.props.match.params
        const { displayed, videos } = this.state

        if (displayed !== id) {
            const match = videos.find(v => v.id.videoId === id)
            this.setState({ displayed: id })
            this.updateState(match.snippet.title)
        }
    }

    render() {
        return (
            <div className="youtube">
                <Navbar updateState={this.updateState} />
                <Main videos={this.state.videos} />
            </div>
        )
    }
}
export default Youtube