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
 display: inline-block;
  position: relative;
  color: #0087ca;
color: white;
font-size:20px;
margin-right:20px;
text-decoration: none;
@media (max-width:450px){
  font-size: 15px;
}
&:hover{
color: white;
font-size: 22px;
transition: all .4s ease-in;
}
&:after{
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
&:hover:after{
  transform: scaleX(1);
  transform-origin: bottom left;
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
padding: 15px;
 position: absolute;
 opacity: ${({isOpen})=> isOpen? "1":"0"};
 right:${({isOpen})=> isOpen? "0px":"0px"};
 top:${({isOpen})=> isOpen? "40px":"-40px"};
 border-radius: 10px;
 background-color: gray;
 transition: all .8s ease-in-out;
 
 box-shadow: 2px 2px 10px black;
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
       </>
        ):<Menu onClick={()=>setMenu(true)}></Menu>}

        <MenuBox isOpen={menu}>
        <Item href="#Project"> Project</Item>
        <Item href="#Skills">Skills </Item>
        <Item href="#WorkHistory">About</Item>
        <Item href="#Contact">Contact</Item>
        </MenuBox>
        
    </Bar>
  )
}

export default NavBar