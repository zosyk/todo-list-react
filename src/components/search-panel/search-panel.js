import React from 'react';
import "./search-panel.css";


const SearchPanel = ({onChange, searchString}) => {
    return <input className="search-input" onChange={(e) => onChange(e.target.value)} placeholder="type to search" value={searchString}/>
};

export default SearchPanel;