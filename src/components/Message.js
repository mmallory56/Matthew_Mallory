import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
width: 100%;
height:auto;
color:white;
border-radius: 10px;
background-color: #ffffff39;
font-size:20px;
padding-top: 20px;
padding-bottom:20px;
margin-top: 10px;

box-shadow: 2px 2px 3px #acacac72;
`


const Message = (props) => {
  return (
    <Box>
        {props.Message}
    </Box>
  )
}

export default Message