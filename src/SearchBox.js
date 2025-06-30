import React from "react";

// SearchBox component renders an input field for searching robots
const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      {/* Calls searchChange handler on every input change */}
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;