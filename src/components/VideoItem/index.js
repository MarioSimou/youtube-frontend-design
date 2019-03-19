import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class VideoItem extends Component {
    render() {
        const { video } = this.props
        if (video) {
            const { title, publishedAt, description, thumbnails: img } = video
            return (
                <Link to={ `/video/${ this.props.id }` }>
                    <div className="card" tabIndex="0">
                        <div className="header">
                            <img src={img.medium.url} alt={title} />
                        </div>
                        <div className="content">
                            <div className="title">
                                {title}
                            </div>
                            <div className="desc">
                                {description}
                            </div>
                        </div>
                        <div className="footer">
                            <div>
                                {new Date(publishedAt).toDateString()}
                            </div>
                        </div>
                    </div>
                </Link>
            )
        } else {
            return (
                <div>
                    Loading video item
                </div>
            )
        }
    }
}

export default VideoItem