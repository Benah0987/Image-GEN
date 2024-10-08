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

function GenerateImageForm({  
  post,
  setPost,
  createPostLoading,
  generateImageLoading,
  setGenerateImageLoading,
  setCreatePostLoading
}) {
  
  const generateImageFun = () => {
    setGenerateImageLoading(true);
    // Add logic for generating the image
  };

  const createPostFun = () => {
    setCreatePostLoading(true);
    // Add logic for creating the post
  };

  return (
    <Form>
        <Top>
            <Title>Generate Image With Prompt</Title>
            <Desc>Write a prompt to generate the image you want</Desc>
        </Top>
        <Body>
            <TextInput 
              label="Author" 
              placeholder="Enter your name..." 
              name="name"
              value={post.name}
              handleChange={(e) => setPost({ ...post, name: e.target.value })} 
            />
            <TextInput
              label="Image Prompt"
              placeholder="Write a prompt for the image you want to generate..."
              name="imagePrompt"
              rows="8"
              textArea
              value={post.prompt}
              handleChange={(e) => setPost({ ...post, prompt: e.target.value })}
            />
        </Body>
        <Actions>
          <Button
            text="Generate Image" 
            leftIcon={<AutoAwesomeIcon />} 
            isLoading={generateImageLoading}
            isDisabled={!post.prompt.trim()}
            onClick={generateImageFun}
          />

          <Button 
            text="Post Image" 
            leftIcon={<AutoAwesomeIcon />} 
            isLoading={createPostLoading}
            isDisabled={!post.name.trim() || !post.prompt.trim() || !post.photo}
            onClick={createPostFun}
          />
        </Actions>
    </Form>
  );
}

export default GenerateImageForm;
