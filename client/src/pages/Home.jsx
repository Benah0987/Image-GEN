import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';

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
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`

  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 640px) and (max-width: 1198px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function Home() {
  const items = [
    {
      photo: 'https://imgs.search.brave.com/YodChJxJhW8tiny2M33QjEs1RXQyQLUvzpxEOJx3zdM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzU1LzgzLzkw/LzM2MF9GXzc1NTgz/OTAwN19GRm5HT2d1/bTdUbjhoRW9vZnVB/aUhhZnBsVjRvUFo1/OS5qcGc',
      author: 'Benah',
      prompt: 'Hello',
    },
    // Add more items as needed
  ];

  return (
    <Container>
      <Headline>
        Explore Popular Posts From Community
        <Span>Generated with AI</Span>
      </Headline>
      <SearchBar />
      <Wrapper>
        <CardWrapper>
          {items.map((item, index) => (
            <ImageCard key={index} item={item} />
          ))}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
}

export default Home;
