import React from 'react'
import styled from 'styled-components'
import GenerateImageForm from '../components/GenerateImageForm';

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: ${({ theme }) => theme.bg};

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
flex: 1;
height: fit-content
gap: 8%;
max-width: 1200px;
padding: 32px 0px;
display: flex;
justify-content: center;
@media (max-width: 768px){
 flex-direction: column;
}
`;


function CreatePost() {
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm />
      </Wrapper>
    </Container>
  
  )
}

export default CreatePost