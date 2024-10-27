// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  padding: 1rem;
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 90%;
  top: 0;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  width: 300px;
`;

const Navbar = ({ onSearch }) => (
  <NavbarContainer>
    <h1>EventSpot Lite</h1>
    <SearchInput
      type="text"
      placeholder="Search events..."
      onChange={(e) => onSearch(e.target.value)}
    />
  </NavbarContainer>
);

export default Navbar;
