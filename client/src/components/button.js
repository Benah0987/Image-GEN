import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #007bff; /* Blue background */
  color: white; /* White text */
  border: none; /* Remove default border */
  border-radius: 4px; /* Rounded corners */
  padding: 10px 20px; /* Padding around the text */
  font-size: 16px; /* Font size */
  display: flex; /* Flexbox for alignment */
  align-items: center; /* Center items vertically */
  gap: 8px; /* Space between icon and text */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth background color transition */

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

function Button({ text, leftIcon, onClick }) {
  return (
    <StyledButton onClick={onClick}>
      {leftIcon} {text}
    </StyledButton>
  );
}

export default Button;
