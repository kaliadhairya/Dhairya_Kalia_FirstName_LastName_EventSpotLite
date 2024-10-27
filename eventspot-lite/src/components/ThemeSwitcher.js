// src/components/ThemeSwitcher.js
import React from 'react';
import styled from 'styled-components';

const SwitcherContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
`;

const SwitcherButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#333')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#ccc' : '#555')};
  }
`;

const ThemeSwitcher = ({ toggleTheme, isDarkMode }) => (
  <SwitcherContainer>
    <SwitcherButton isDarkMode={isDarkMode} onClick={toggleTheme}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </SwitcherButton>
  </SwitcherContainer>
);

export default ThemeSwitcher;
