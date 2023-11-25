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
                <div className="search-page">
                    <div className="search-form">
                        <img src={lionhead} className="App-logo" alt="logo" />
                        <div className="header">{searchResult ? `Your last search: ${searchResult.name || searchResult.term}` : "Search for monsters"}</div>
                        <div className="form-container">
                            <form className="monster-search" onSubmit={(e) => handleFormSubmit(e, searchTerm, setSearchResult)}>
                                <input type="text" onChange={(e) => handleInputChange(setSearchTerm, e.target.value)} required placeholder="Search for monsters" />
                                <input className="submit" type="submit" value="search!" />
                            </form>
                        </div>
                    </div>
                    <div className="results-container" style={{display: searchResult ? "flex" : "none"}}>
                        {searchResult ? searchResult.name ? <SearchResult result={searchResult} /> : (<div className="header">your search returned no results</div>) : ""}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Search;
