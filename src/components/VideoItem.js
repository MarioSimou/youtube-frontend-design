import React, { Component } from 'react'

class VideoItem extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
    }
    render() {
        if (this.props.video) {
            const { desc, title, img, url ,publishedAt } = this.props.video

            return (
                <a href={ url } ref={this.ref} >
                    <div className="card" >
                        <div className="header">
                            <img src={img.url} alt={title} />
                        </div>
                        <div className="content">
                            <div className="title">
                                {title}
                            </div>
                            <div className="desc">
                                {desc}
                            </div>
                        </div>
                        <div className="footer">
                            <div>
                                {new Date(publishedAt).toDateString()}
                            </div>
                        </div>
                    </div>
                </a>
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