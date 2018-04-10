import React from 'react';
import { Debounce } from 'react-throttle';

const Search = ({onSearch}) => {
    let _search
    return(
    <Debounce time="400" handler="onChange">
        <input placeholder="Search" onChange={onSearch} />
    </Debounce>
    )
}

export default Search;