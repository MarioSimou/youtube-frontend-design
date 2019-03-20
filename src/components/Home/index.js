import React , { Component } from 'react'
import { youtubeSearch } from '../../config/youTube'

// components
import Navbar from '../Navbar'
import Main from '../Main'

// style
import './style.css'

class Youtube extends Component {
    constructor( props ){
        super( props )
        this.state = { videos : [] }
    }

    updateState = async v => {
        // fetch resource
        const youtubeVideos = await youtubeSearch.get( '' ,{ params : { q : v }})
        // update state
        this.setState({ videos : youtubeVideos.data.items })
    }

    // initial loading of the component
    componentDidMount() {
        this.updateState( 'football' ) 
    }

    render(){
            return(
                <div className="home">
                    <Navbar updateState={ this.updateState } />
                    <Main videos={ this.state.videos }/>
                </div>
            )    
    }
}
export default Youtube