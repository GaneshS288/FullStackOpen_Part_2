function Search({ inputValue, handleInput }) {
  return (
    <>
      <label htmlFor="search-country">Search Country:</label>
      <input
        type="text"
        id="search-country"
        name="search-country"
        value={inputValue}
        onChange={(event) => handleInput(event)}
      />
    </>
  );
}

export default Search;