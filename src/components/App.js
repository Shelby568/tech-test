import React, { useState } from "react";
import "../styles/App.css";
import Search from './Search';
import SearchResults from './SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  return (
    <div className="App">
      <img className="logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="NASA Logo" />
      <Search setSearchResults={ setSearchResults } searchText={searchText} setSearchText={setSearchText}/>
      {searchResults.length > 0 && <SearchResults results={searchResults}/>}
      {searchText.length > 1 && !searchResults.length && <p className="no-results">No results</p>}
   
    </div>
  );
}

export default App;
