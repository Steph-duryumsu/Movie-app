import './SearchBox.css';

const SearchBox = ({searchQuery, setSearchQuery}) => {
  const handleChange = (event) => {
    setSearchQuery(event.target.value); // updates the state in the homepage
  };
  
  return (
    <div className='search-container'>
      <input placeholder='Search for a movie'
      type='text'
      value={searchQuery}
      onChange={handleChange}
      // onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
};

export default SearchBox;