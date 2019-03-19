import React, { Component } from 'react'

// style
import './style.css'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    searchVideo = e => {
        const { value } = this.state
        // prevents default functionality
        e.preventDefault();
        // update app state
        this.props.updateState( value )
    }
    
    render() {
        return (
            <div className="searchbar">
                <form onSubmit={ this.searchVideo }>
                    <div className="field">
                        <input
                            id="search"
                            name="search"
                            type="text"
                            onChange={e => { this.setState({ value: e.target.value }) }}
                            value={this.state.value}
                            placeholder="Search"
                        />
                    </div>
                    <div className="field">
                        <button id="search-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar