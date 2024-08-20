import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Avatar } from '@mui/material';
import { DownloadRounded } from '@mui/icons-material';
import FileSaver from 'file-saver';

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
    transform: scale(1.05);
  }

  &:nth-child(7n + 1) {
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};
  transition: opacity 0.3s ease;
  border-radius: 6px;
  justify-content: end;
  padding: 16px;
  opacity: 0;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Prompt = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
`;

const Author = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  display: flex;
  font-weight: 600;
  gap: 8px;
  align-items: center;
`;

function ImageCard({ item = {} }) {
  const { photo = '', prompt = 'No prompt available', author = 'Unknown Author' } = item;

  return (
    <Card>
      <LazyLoadImage width="100%" src={photo} alt={prompt} />
      <HoverOverlay>
        <Prompt>{prompt}</Prompt>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Author>
            <Avatar sx={{ width: '32px', height: '32px' }}>
              {author[0] || 'A'}
            </Avatar>
            {author}
          </Author>
          <DownloadRounded onClick={() => FileSaver.saveAs(photo, 'download.jpg')} />
        </div>
      </HoverOverlay>
    </Card>
  );
}

export default ImageCard;
