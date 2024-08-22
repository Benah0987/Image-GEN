import React from 'react';
import styled from 'styled-components';
import Button from './button';
import TextInput from './TextInput';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;

function GenerateImageForm() {
  return (
    <Form>
        <Top>
            <Title>Generate Image With Prompt</Title>
            <Desc>Write prompt to generate the image you want</Desc>
        </Top>
        <Body>
            <TextInput label="Author" placeholder="Enter your name..." />
            <TextInput
              label="Image Prompt"
              placeholder="Write a prompt for the image you want to generate..."
              name="imagePrompt"
              rows="8"
              textArea
            />
        </Body>
        <Actions>
          <Button text="Generate Image" leftIcon={<AutoAwesomeIcon />} />
          <Button text="Post Image" leftIcon={<AutoAwesomeIcon />} />
        </Actions>
    </Form>
  );
}

export default GenerateImageForm;
