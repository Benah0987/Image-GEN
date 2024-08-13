import React from 'react';
import styled from 'styled-components';
import Button from "./button";
import { AddRounded } from '@mui/icons-material'; // Assuming you're using MUI icons

const Container = styled.div`
  /* Add your styles here */
`;

function Navbar() {
  return (
    <Container>
      GenAI
      <Button
        text="Create new Post"
        leftIcon={
          <AddRounded
            style={{
              fontSize: "18px",
            }}
          />
        }
      />
    </Container>
  );
}

export default Navbar;
