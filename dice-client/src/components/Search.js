import React, { useState } from 'react';
import { handleInputChange, handleFormSubmit } from '../services';
import lionhead from '../images/lionhead.png'
import SearchResult from './SearchResult';


function Search() {
    //state values
    const [searchTerm, setSearchTerm] = useState(null);
    const [searchResult, setSearchResult] = useState(null);

    return (
        <div className="App">
            <header className="App-header">
                <img src={lionhead} className="App-logo" alt="logo" />
                <h1>{searchResult ? `Your last search: ${searchResult.name || searchResult.term}` : "Search for monsters"}</h1>
                <div className="form-container">
                    <form className="monster-search" onSubmit={(e) => handleFormSubmit(e, searchTerm, setSearchResult)}>
                        <input type="text" onChange={(e) => handleInputChange(setSearchTerm, e.target.value)} required placeholder="Search for monsters" />
                        <input type="submit" value="search!" />
                    </form>
                </div>
                <div className="results-container">
                    {searchResult ? searchResult.name ? <SearchResult result={searchResult} /> : (<h1>your search returned no results</h1>) : ""}
                </div>
            </header>
        </div>
    );
};

export default Search;
