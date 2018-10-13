import React from 'react';
import './SearchField.css';

const SearchField = ({onSearch}) => (
    <input
        aria-label="Search Robocats"
        className="SearchField-custom"
        type="search"
        onChange={onSearch}/>
)

export default SearchField;