import React from 'react'

// compoents
import SearchBar from '../SearchBar'

// style
import './style.css'

const Navbar = props => {
    return (
        <div className="navbar">
            <div className="left">
                <div>
                    <i className="fas fa-bars"></i>
                </div>
                <div>
                    <i className="fab fa-youtube"></i>
                    <span>&nbsp;Youtube</span>
                </div>
            </div>
            <div className="center">
                <SearchBar updateState={ props.updateState } />
            </div>
            <div className="right">
                <div>
                <i className="fas fa-video"></i>
                </div>
                <div>
                <i className="fas fa-bars"></i>
                </div>
                <div>
                <i className="fas fa-comment-dots"></i>
                </div>
                <div>
                <i className="fas fa-bell"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar