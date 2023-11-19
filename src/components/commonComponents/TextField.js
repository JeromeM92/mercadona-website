import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../assets/colors/colors';

const StyledTextInput = styled.input`
  width: 240px;
  height: 36px; 
  border: 1px solid ${COLORS.darkGreen};
  background: ${COLORS.softGrey};
  border-radius: 10px;

  &:focus {
    outline: none;
    border-color: ${COLORS.darkGreen};
  }
`;

function TextField({ name, value, onChange }) {
  return (
    <StyledTextInput
      type="text"
      placeholder={`Entrez le ${name.toLowerCase()}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default TextField;
