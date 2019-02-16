import React, { Component } from 'react';

// CSS
import '../css/Navbar.css';
// Components
import { Menu , Youtube , Alert , Video , Comment } from './Icons';
import SearchBar from './SearchBar';


class Navbar extends Component {
    render() {
        return (
            <div className="nav" >
                <div className="left">
                    <Youtube content="YouTube" />
                </div>
                <div className="center">
                    <SearchBar fetchYoutubeAPIData={ this.props.fetchYoutubeAPIData } />
                </div>
                <div className="right">
                    <Video />
                    <Menu />
                    <Comment />
                    <Alert />
                </div>
            </div>
        )
    }
}

export default Navbar