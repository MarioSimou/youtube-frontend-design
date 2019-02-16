import React, { Component } from 'react';
import { Search } from './Icons'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    requestResource = ( e )  => {
        // cancels defualt behaviour
        e.preventDefault();
        // calls functionality that fetch data
        this.props.fetchYoutubeAPIData( this.state.value )
    }
    render() {
        return (
            <form onSubmit={ this.requestResource }>
                <div className="search-field">
                    <input 
                        type="text" 
                        onChange={(e) => this.setState({ value: e.target.value })} 
                        placeholder="Search" />
                    <Search 
                        fetchYoutubeAPIData={ this.props.fetchYoutubeAPIData } 
                        value={ this.state.value } />
                </div>
            </form>
        )
    }
}


export default SearchBar 