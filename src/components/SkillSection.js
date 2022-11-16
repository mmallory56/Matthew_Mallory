import React from 'react'
import styled from "styled-components"
import {SiUnrealengine} from 'react-icons/si'

import {FaUnity,FaReact} from "react-icons/fa"
import{GrGatsbyjs,GrNode,GrGolang}from 'react-icons/gr'
import {SiTypescript,SiJavascript} from "react-icons/si"
import {BsFillBootstrapFill} from 'react-icons/bs'

const SkillBadges = styled.div`
width: auto;
height: auto;


display: grid;
grid-template-columns: 10% 10% 10% 10%;
align-items: center;
justify-content: space-evenly;
font-size: 60px;
background-color: #18191f00;

& svg{
  
background-color: #8484843f;
color: #ffffffff;


border-radius: 29px; padding: 11px 19px;

animation: animate 9s linear infinite; 
animation-direction: alternate-reverse;
transition: filter 2s ease-in-out;
margin-top: 50px;

@keyframes animate {
  0%   {filter: drop-shadow( 0 0 10px #121f83) drop-shadow( 0 0 20px #01148e)
drop-shadow( 0 0 30px #001c82) drop-shadow( 0 0 35px #0062ff) }
  25%  {filter: drop-shadow( 0 0 10px #ff0000) drop-shadow( 0 0 20px #8e0101)
drop-shadow( 0 0 30px #000082) drop-shadow( 0 0 35px #ff0000)}
  50%  {filter: drop-shadow( 0 0 10px #ff0000) drop-shadow( 0 0 20px #01688e)
drop-shadow( 0 0 30px #004a3e) drop-shadow( 0 0 35px #004d50) }
  75%  {filter: drop-shadow( 0 0 10px #005a4e) drop-shadow( 0 0 20px #004461)
drop-shadow( 0 0 30px #006482) drop-shadow( 0 0 35px #ff00e1) }
  100% {filter: drop-shadow( 0 0 10px #f700ff) drop-shadow( 0 0 20px #87018e)
drop-shadow( 0 0 30px #820000) drop-shadow( 0 0 350px #ff0000) }
}
@media (max-width: 450px){
    font-size: 20px;
  }

}
& svg :nth-of-type(2n + 1){
animation-delay: 3s;
}
& .tooltiptext{
  position:fixed;
  visibility:hidden;
  color:white;
  font-size:12px;
  background-color:grey;
  padding: 4px;
  border-radius:10px;
  opacity: 0;
  transform: translate(100%, -60px);
  transition: all 1s ease-in-out;
  
}
& .tooltip:hover .tooltiptext {
  
 
  visibility:visible;
  opacity: 1;
  transform: translate(70%, -120px);
} 

@media (max-width: 400px) {
  grid-template-columns: 10% 10% 10% ;
  margin:5px;
  & svg{
    font-size: 20px;
  }
  & svg:hover{
    font-size: 60px;
    color: lightcyan;
  
    transition: all .5s ease-in;
    &:div:hover{
      opacity:1;
    }
  }
}
@media (min-width:1000){
  font-size: 50px;
}
`
export const SkillSection = () => {
  return (
    <SkillBadges>
    <div className="tooltip">
      <SiUnrealengine></SiUnrealengine>
      <div className="tooltiptext">Unreal Engine</div>
    </div>
    <div className="tooltip">
      <FaUnity/>
      <div className="tooltiptext">Unity Engine</div>
    </div>
    <div className="tooltip">
    <FaReact/>
      <div className="tooltiptext">React</div>
    </div>
    <div className="tooltip">
    <GrGatsbyjs/>
      <div className="tooltiptext">Gatsbyjs</div>
    </div>


    <div className="tooltip">
    <GrNode/>
      <div className="tooltiptext">Nodejs</div>
    </div>
    <div className="tooltip">
    <BsFillBootstrapFill/>
      <div className="tooltiptext">Bootstrap</div>
    </div>
    <div className="tooltip">
    <SiTypescript/>
      <div className="tooltiptext">Typescript</div>
    </div>
    <div className="tooltip">
    <SiJavascript/>
      <div className="tooltiptext">Javascript</div>
    </div>
    
  </SkillBadges>
  )
}
