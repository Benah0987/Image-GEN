import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const InputField = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 4px;
  width: 100%;
`;

const TextAreaField = styled.textarea`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 4px;
  width: 100%;
  resize: vertical; /* Allow vertical resizing only */
  box-sizing: border-box; /* Ensure padding and border are included in width/height */
`;

function TextInput({ label, placeholder, name, rows, textArea }) {
  return (
    <InputContainer>
      {label && <Label htmlFor={name}>{label}</Label>}
      {textArea ? (
        <TextAreaField
          id={name}
          name={name}
          placeholder={placeholder}
          rows={rows || 4} // Default to 4 rows if not provided
        />
      ) : (
        <InputField
          id={name}
          name={name}
          placeholder={placeholder}
        />
      )}
    </InputContainer>
  );
}

export default TextInput;
