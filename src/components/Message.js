import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
width: 100%;
height:auto;
color:white;
border-radius: 10px;
background-color: grey;
font-size:20px;
padding-top: 20px;
padding-bottom:20px;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 2px 2px 3px white;
`


const Message = (props) => {
  return (
    <Box>
        {props.Message}
    </Box>
  )
}

export default Message