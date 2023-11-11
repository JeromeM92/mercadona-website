// CategoryDropdown.js
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/colors/colors';

const StyledDropdown = styled.select`
  width: 240px;
  border: 1px solid ${COLORS.darkGreen};
  padding: 12px 15px 12px 16px;
  background: ${COLORS.softGrey};
  border-radius: 10px;

  &:focus {
    outline: none;
    border-color: ${COLORS.darkGreen};
  }
`;


function CategoryDropdown({ categories, selectedCategory, onSelectCategory }) {
  return (
    <StyledDropdown value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
      <option value="">Toutes les catégories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </StyledDropdown>
  );
}

export default CategoryDropdown;
