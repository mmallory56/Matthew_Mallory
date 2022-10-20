import React from 'react'
import styled from 'styled-components'
import {BsFillArrowUpCircleFill} from "react-icons/bs"
const Arrow = styled.a`
text-decoration: none;
bottom:0;
right:0;
position: fixed;
color:white;
padding:20px;
margin:20px;
font-size:50px;
transition: all .1s ease-in-out;
&:hover{
    font-size:60px;
}
&:hover:active{
    font-size:20px;
    color:teal;
}
&:active{
    font-size: 20px;
}
`
const ScrollToTop = () => {
  return (
    <Arrow href="#Navbar"><BsFillArrowUpCircleFill></BsFillArrowUpCircleFill></Arrow>
  )
}

export default ScrollToTop