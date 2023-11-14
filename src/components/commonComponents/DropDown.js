// CategoryDropdown.js
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/colors/colors';

const StyledDropdown = styled.select`
  width: 240px;
  height: 40px;
  border: 1px solid ${COLORS.darkGreen};
  padding: 12px 16px;
  background: ${COLORS.softGrey};
  border-radius: 10px;

  &:focus {
    outline: none;
    border-color: ${COLORS.darkGreen};
  }
`;


function Dropdown({ name, options, selectedOption, onSelectOption }) {
  return (
    <StyledDropdown value={selectedOption} onChange={(e) => onSelectOption(e.target.value)}>
      <option value="">{`${name}`}</option>
      {options.map((option) => (
        <option key={`${name}-${option}`} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
}

export default Dropdown;

