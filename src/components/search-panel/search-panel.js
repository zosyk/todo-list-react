import React, {Component} from 'react';
import "./search-panel.css";

export default class SearchPanel extends Component {


    state = {
        searchString: ''
    };

    onChange = (e) => {
        this.setState({
            searchString: e.target.value
        });

        this.props.onChange(e.target.value);
    };


    render() {
        return <input className="search-input" onChange={this.onChange} placeholder="type to search" value={this.state.searchString}/>
    }
};