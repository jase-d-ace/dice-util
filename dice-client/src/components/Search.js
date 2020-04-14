import React, { useState, useEffect } from 'react';
import { handleInputChange, handleFormSubmit } from '../services';
import lionhead from '../images/lionhead.png'
import SearchResult from './SearchResult';


function Search() {
  //state values
  const [searchTerm, setSearchTerm] = useState(null);
  const [prevSearchTerm, setPrevSearchTerm] = useState(null);
  const [error, setError] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if (searchResult) {
      setSearchCompleted(true);
      if (searchResult.name) {
        setPrevSearchTerm(searchResult.name);
        setError(false);
      } else {
        setError(true);
      }
    }
    
    return () => {
      setPrevSearchTerm(searchTerm);
      setSearchCompleted(false);
    }
  }, [searchCompleted, searchResult, error])

  return (
    <div className="App">
      <header className="App-header">
        <img src={lionhead} className="App-logo" alt="logo" />
        <h1>{searchResult ? `Your last search: ${prevSearchTerm}` : "Search for monsters" }</h1>
        <div className="form-container">
          <form className="monster-search" onSubmit={(e) => handleFormSubmit(e, searchTerm, setSearchResult)}>
            <input type="text" onChange={(e) => handleInputChange(setSearchTerm, e.target.value)} required placeholder="Search for monsters" />
            <input type="submit" value="search!" />
          </form>
        </div>
        <div className="results-container">
          {error ? (<h1>your search returned no results</h1>) : (searchResult && searchResult.name) ? <SearchResult result={searchResult} /> : ""}
        </div>
      </header>
    </div>
  );
};

export default Search;
