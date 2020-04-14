import React, { useState, useEffect } from 'react';
import { handleInputChange, handleFormSubmit } from '../services';
import lionhead from '../images/lionhead.png'


function Search() {
  //state values
  const [searchTerm, setSearchTerm] = useState(null);
  const [prevSearchTerm, setPrevSearchTerm] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if(searchResult) {
      setPrevSearchTerm(searchResult.name)
    }
  }, [searchResult])

  return (
    <div className="App">
      <header className="App-header">
        <img src={lionhead} className="App-logo" alt="logo" />
        <h1>{searchResult ? `Your last search: ${prevSearchTerm}` : "Search for monsters" }</h1>
        <form onSubmit={(e) => handleFormSubmit(e, searchTerm, setSearchResult)}>
          <input type="text" onChange={(e) => handleInputChange(setSearchTerm, e.target.value)} required placeholder="Search for monsters" />
          <input type="submit" value="search!" />
        </form>
      </header>
    </div>
  );
};

export default Search;
