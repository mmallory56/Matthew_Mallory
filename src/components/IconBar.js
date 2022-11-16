import React from 'react'
import styled from 'styled-components'
import {AiOutlineHome,AiOutlineQuestionCircle} from "react-icons/ai"
import {IoMdContact} from "react-icons/io"
import {HiOutlineWrenchScrewdriver} from 'react-icons/hi2'
import {BiWrench} from "react-icons/bi"
const Bar = styled.div`
position: fixed;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction:row ;
top: 93%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 100px;
background-color: #073d73ec;
width:200px;
padding:8px;
`
const BarIconButton = styled.a`
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
font-size: 30px;
width: 40px;
height: 40px;
border-radius: 50px;
background-color: #1072a788;
transition: all .3s ease-in-out;
color: #ffffffff;
&:hover{
    font-size: 50px;
    transition: all .3s ease-in-out;
}
`
const IconBar = () => {
 
  return (
    <Bar>
        <BarIconButton href="#Home">
            <AiOutlineHome alt="Home"></AiOutlineHome>
        </BarIconButton>
       
        <BarIconButton href="#Project"> 
            <BiWrench alt="Projects"></BiWrench>
        </BarIconButton>
        <BarIconButton href="#Skills">
        <HiOutlineWrenchScrewdriver alt="Skills"></HiOutlineWrenchScrewdriver>
        </BarIconButton> 
        <BarIconButton href="#About"> 

        <AiOutlineQuestionCircle alt="About">
        </AiOutlineQuestionCircle>

        </BarIconButton>
        <BarIconButton href="#Contact">

        <IoMdContact>
        </IoMdContact>

        </BarIconButton>
       
    </Bar>
  )
}

export default IconBar