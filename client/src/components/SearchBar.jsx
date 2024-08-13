import React from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@mui/icons-material';

const SearchBarContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text_secondary + '90'};
  align-items: center;
  padding: 5px 10px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  margin-left: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchOutlined />
      <Input placeholder="Search..." />
    </SearchBarContainer>
  );
}

export default SearchBar;
