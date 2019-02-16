import React from 'react'

const Menu = (props) => {
    return (
        <div className="menu">
            <i className="fab fa-elementor custom-icon"></i>
        </div>

    )
}

const Youtube = (props) => {
    return (
        <div className="youtube">
            <a href="/"><i className="fab fa-youtube custom-icon"></i><div>{ props.content }</div></a>
        </div>
    )
}


const Alert = (props) => {
    return (
        <div className="alert">
            <i className="fas fa-bell custom-icon"></i>
        </div>

    )
}

const Video = (props) => {
    return (
        <div className="video">
            <i className="fas fa-video custom-icon"></i>
        </div>

    )
}

const Comment = (props) => {
    return (
        <div className="comment">
            <i className="fas fa-comment-dots custom-icon"></i>
        </div>

    )
}

const Search = (props) => {
    const onSeachClick = () => {
        props.fetchYoutubeAPIData( props.value )
    }

    return (
        <div className="search" onClick={ onSeachClick }>
            <i className="fas fa-search"></i>
        </div>

    )
}

export { Menu, Youtube, Alert, Video, Comment , Search }