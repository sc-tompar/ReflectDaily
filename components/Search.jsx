import React from 'react';
import { MdSearch } from 'react-icons/md';
import '../style/Reflection.css';

const Search = ({ handleSearchNote, handleSearchTitle }) => {
    return (
        <div className='search'>
            <MdSearch className='search-icon' size = '1.3em'/>
            <input 
                onChange={ (event) => {
                    handleSearchNote(event.target.value);
                    handleSearchTitle(event.target.value);
                }} 
                type='text' 
                placeholder='type to search...' 
            />
        </div>
    );
};

export default Search;
