import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => `${theme.arrow}80`};  // Assuming you're adding transparency
  border-radius: 20px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  background: ${({ theme }) => theme.yellow};
`;

function GeneratedImageCard({ loading, src }) {
  return (
    <StyledContainer>
      {loading ? (

        <>
        <CircularProgress style ={{ color: "inherit", width: "24px", height: "24px"}}/>
        Generating Your Image  ...</>
      ) : (
        src ? <Image style={{ backgroundImage: `url(${src})` }} /> : <>Write a prompt to generate image</>
      )}
    </StyledContainer>
  );
}

export default GeneratedImageCard;
