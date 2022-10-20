import React from 'react'
import styled from 'styled-components'

const ProjectBox = styled.div`
width: 90%;
height: auto;

background-color: green;
position: relative;
box-shadow: 5px 5px 5px gray;
background-image: url(${props =>props.Image|| "./Thriftter.png"});
margin:10px;
background-repeat: no-repeat;
background-size: cover;
border-radius: 10px;
&:hover{

}
`
const ProjectText = styled.div`
display: flex;
align-items: center;
justify-content: center;
position:absolute;
width:100%;
height: 100%;
opacity:0;
background-color: gray;
border-radius: 10px;
color: black;
transition: all .3s ease-in-out;

&:hover{
    opacity: .9;
}
`

const ProjectItem = ({children,Text,Image}) => {
  return (
    <ProjectBox Image={Image}><ProjectText>{Text}</ProjectText></ProjectBox>
  )
}

export default ProjectItem