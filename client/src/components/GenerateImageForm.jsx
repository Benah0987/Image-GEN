import React from 'react'
import styled from "styled-components"

const Form = styled.div``;
const Top = styled.div``;
const Title = styled.div``;
const Desc = styled.div``;
const Body = styled.div``;
const Actions = styled.div``;

function GenerateImageForm() {
  return (
    <Form>
        <Top>
            <Title>Generate Image With Prompt</Title>
            <Desc>Write propmt to generate image you want</Desc>
        </Top>
        <Body>
            Body
        </Body>
        <Actions>Actions</Actions>
    </Form>
  )
}

export default GenerateImageForm