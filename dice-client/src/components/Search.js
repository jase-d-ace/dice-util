import React, { useState, useEffect } from 'react';
import _ from 'underscore';

function Search() {
  //state values
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search for some monsters</h1>
        <form>
          <input type="text" required placeholder="Search for monsters" />
          <input type="submit" value="search!" />
        </form>
      </header>
    </div>
  );
};

export default Search;
