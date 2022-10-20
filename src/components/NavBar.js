import React, { useState } from 'react'
import styled from "styled-components"
import {AiOutlineMenu,AiOutlineClose,AiOutlineBulb,AiFillBulb} from 'react-icons/ai'
import { useContext } from 'react';
const Bar = styled.div`
position: relative;
width: 100%;
height: 50px;
color: white;
display: flex;
border-radius: 10px;
align-items: center;
justify-content:right;

`
const Item = styled.a`
color: white;
font-size:20px;
margin-right:20px;
text-decoration: none;
&:hover{
color: lightgrey;

}
`
const Menu= styled(AiOutlineMenu)`
opacity: .5;
font-size: 40px;
transition: all .4s ease-in-out;
margin: 10px;
&:focus{
  
}
&:hover{
opacity: 1;
}
`
const Close= styled(AiOutlineClose)`
font-size: 40px;
margin: 10px;
`
const MenuBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 10px;
 position: absolute;
 right:40px;
 top: 70px;
 border-radius: 10px;
 background-color: gray;
 transition: all .8s ease-in-out;
 transform: all .7s ease-in;
 box-shadow: 10px 10px 10px black;
`
const BulbFill = styled(AiFillBulb)`
font-size: 30px;
margin-right: 20px;
`

const NavBar = (props) => {
  const [menu, setMenu] = useState(false);
  
  return (
    <Bar id="Navbar">
      
        <BulbFill></BulbFill>
        {menu?(<>
        <Close onClick={()=>setMenu(false)}></Close>
        <MenuBox>
        <Item href="#Project"> Project</Item>
        <Item href="#Skills">Skills </Item>
        <Item href="#WorkHistory">Work History</Item>
        <Item href="#Contact">Contact</Item>
        </MenuBox></>
        ):<Menu onClick={()=>setMenu(true)}></Menu>}
       
        
    </Bar>
  )
}

export default NavBar