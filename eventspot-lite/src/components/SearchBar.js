// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 0.5rem;
  margin: 1rem;
  width: 300px;
`;

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <SearchInput
    type="text"
    placeholder="Search events..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
);

export default SearchBar;
