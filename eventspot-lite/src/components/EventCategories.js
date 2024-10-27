// src/components/EventCategories.js
import React from 'react';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: ${({ isSelected }) => (isSelected ? '#007bff' : '#ccc')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const categories = ["All", "Music", "Art", "Sports", "Tech"];

const EventCategories = ({ selectedCategory, setSelectedCategory }) => (
  <CategoriesContainer>
    {categories.map(category => (
      <CategoryButton
        key={category}
        isSelected={category === selectedCategory}
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </CategoryButton>
    ))}
  </CategoriesContainer>
);

export default EventCategories;
