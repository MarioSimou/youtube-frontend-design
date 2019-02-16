import React, { Component } from 'react'
import '../css/Card.css'

class VideoItem extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
    }

    onCardSelection = ( e ) => {
        this.props.updateSelectedVideo( { card : this.ref.current , video : this.props.video } )
    }

    render() {
        if (this.props.video) {
            const { desc, title, img, publishedAt } = this.props.video

            return (
                <div className="card" ref={this.ref} tabIndex="0" onClick={ this.onCardSelection } >
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