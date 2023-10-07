import { useState } from 'react';
import  { AiOutlineSearch } from "react-icons/ai";
import './search.css';

// eslint-disable-next-line react/prop-types
const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleSubmit = ( e ) => {
        e.preventDefault();
        onSearch(query);
    }
  return (
    <form onSubmit={handleSubmit} className="form" >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="submit-button">
        <AiOutlineSearch  />
      </button>
    </form>
  )
}

export default Search