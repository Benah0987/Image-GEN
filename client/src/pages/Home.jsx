import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar';

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

const Headline = styled.div`
font-size: 34px;
font-weight: 500;
color: ${({ theme }) => theme.text_primary};
display: flex;
align-items: centre;
flex-direction: column;

@media (max-width: 600px) {
    font-size: 22px;
  }`

const Span = styled.div`
font-size: 30px;
font-weight: 800;
color: ${({ theme }) => theme.secondary};
align-items: centre;
display: flex;

flex-direction: column;

`  

function Home() {
  return (
    <Container>
      <Headline>Explore Popular Posts From Community
        <Span>Generated with AI</Span>
      </Headline>
      <SearchBar/>
    </Container>
  )
}

export default Home