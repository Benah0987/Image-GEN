import React from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'


const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover{
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black};
  }`


const HoverOverlay = styled.div``;
const Prompt = styled.div``;
const Author = styled.div``;


function ImageCard() {
  return (
    <Card>
        <LazyLoadImage src='https://imgs.search.brave.com/ryrzmK3gV5Zn2LY8Y98D4LXsgyMJovADDghq-XfK2hg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NzI3NzI0L3Bob3Rv/L3N1bnNldC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Mloy/TVFQWnZYT3FXb3NW/MTRfaVA0NTREbW1j/QVVhT19MRHRoMHBQ/cUt4VT0'/>
        
    </Card>
  )
}

export default ImageCard