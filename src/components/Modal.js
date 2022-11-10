import React from 'react'
import { useState, useLayoutEffect } from 'react';

import styled from "styled-components"
import { createPortal } from 'react-dom';
const Background = styled.div`
position: fixed;
right:0;
left:0;
bottom:0;
top: 0;
background-color: rgba(0,0,0,.7);

`
const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: fixed;
top:50%;
right:50%;
background-color:  #4e6c8aa7;
height:auto;
width: min(100%,1000px);
border-radius: 10px;
transform: translate(50%,-50%);
color: black;
`
const Button = styled.div`
margin-top: 5px;
margin-bottom: 5px;
color: #b5b5b5f4;
padding-left: 10px;
padding-right: 10px;
padding-top: 5px;
padding-bottom:5px;
font-size: 20px;
border-color: rgba(0,0,0,0);
border-width: 1px;
border-radius: 10px;
border-style: solid;
transition: all .6s;
&:hover{
    box-shadow: 10px 10px 10x gray;
    background-color: white;
}
&:active{
    background-color: white;
    box-shadow: inset 1px 1px 5px gray;

}

`
function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }
export const Modal= ({children, Visible,setVisible ,wrapperId="react-portal-wrapper"}) => {

const [wrapperElement, setWrapperElement] = useState(null);
useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
  }, [wrapperId]);
  if(Visible!=true)return null;
  return createPortal(
    <>
    
    <Background>
    </Background>
    <Box>
    {children}
    
    <Button onClick={()=>setVisible(false)}>Close</Button>
    </Box>
    </>,document.getElementById(wrapperId)
  )
}
