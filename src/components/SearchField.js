import React from 'react';
import './SearchField.css';

export const SearchField = ({onSearch}) => (
    <input className="SearchField-custom" type="search" onChange={onSearch}/>
)