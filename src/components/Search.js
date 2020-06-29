import React from 'react';
import PropTypes from 'prop-types';
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

Search.propTypes = {
    setSearchResults: PropTypes.func,
    searchText: PropTypes.string,
    setSearchText: PropTypes.func

}

export default Search;