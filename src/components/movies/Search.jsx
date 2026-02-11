import React from 'react'
import SearchSvg from '/src/assets/icons/cards/search.svg?react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='search'>
        <div>
            <SearchSvg className="block outline-white!"/>
            <input
                type="text" 
                placeholder='Search through thousands of movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search