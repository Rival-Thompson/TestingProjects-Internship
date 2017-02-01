/**
 * Created by rival on 30/01/2017.
 */
import React, { Component } from 'react';
import './css/searchInput.css'

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state ={input: ""};
        console.log("constructing input");
    };

    inputChange=(event) => {
        this.setState({input: event.target.value});
        console.log( "INPUT VAL:" + event.target.value);
        this.props.search(event.target.value);

    };

    render() {
        return (
            <input className="search-input" type="text" placeholder="SEARCH..." value={this.state.input} onChange={this.inputChange}/>
        );
    };
}

export default SearchInput;