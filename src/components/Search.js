import React from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages';

const Search = ({ setSearchResults, searchText, setSearchText }) => {  

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(searchText));

    };

    return (
        <>
        <form className="searchform" onSubmit={handleSubmit}>
        <input className="searchbox" type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for images.." />
        <button className="submit" type="submit" >Go!</button>
        </form>
        </>
    );
};

export default Search;