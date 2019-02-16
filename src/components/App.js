import React, { Component } from 'react';
import VideoDetails from './VideoDetails';
import axios from 'axios';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import Navbar from './Navbar';

class App extends Component {
    constructor( props ){
        super( props )
        this.state = { videos : [] }
    }

    fetchYoutubeAPIData = async ( term ) => {
        // KEY IS ADDED HERE
        const baseUrl = 'https://www.googleapis.com/youtube/v3/search'

        const res = await axios.get( `${baseUrl}?part=snippet&q=${term}&type=video&key=${key}&maxResults=10` )
        const videos = res.data.items.map(v => ({ 
            id : v.id.videoId , 
            desc : v.snippet.description , 
            title : v.snippet.title , 
            img : v.snippet.thumbnails.medium,
            url : `https://www.youtube.com/watch?v=${ v.id.videoId}` ,
            publishedAt: v.snippet.publishedAt
        } ) ) 
        console.log(res.data.items)
        // updates app component state
        this.setState( { videos : videos } )
        // vidoes={ this.state.videos }
    }

    render() {
        console.log(this.state)
        return (
            <div className="wrapper">
                    <Navbar fetchYoutubeAPIData={ this.fetchYoutubeAPIData } />
                <div className="main">
                    <div className="left" style={ { background: 'yellow' } }>
                        {/* <VideoDetails video={ this.state.videos.shift() }/> */}
                    </div>
                    <div className="right" >
                        <VideoList >
                            { this.state.videos.map( video => {
                                return <VideoItem key={ video.id } video={ video } />
                            }) }
                        </VideoList>
                    </div>
                </div>
            </div>
        )
    }
}

export { App }