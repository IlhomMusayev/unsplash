import { useState } from 'react'
const Search = ({setValue, handleSearch}) => {




    return ( 
        <form onSubmit = {handleSearch}>
            <input type="text" placeholder = 'Search img name...' onChange = {(e) => setValue(e.target.value)} className="search"/>
            <input type="submit" className =  'search__btn' value="Search" onClick = {(e) => handleSearch}/>
        </form>
     );
}
 
export default Search;