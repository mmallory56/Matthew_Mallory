import React from 'react'
import styled from 'styled-components'
import ProjectItem from './ProjectItem'
import { useContext } from 'react';
const Grid = styled.div`
width:100%;
height:40vw;
display: grid;
grid-template-columns: 33% 33% 33%;
margin-bottom: 150px;

`
const ProjectItem2 = styled.div`
display: flex;
align-items: center;
margin:10px;
margin-left:40px;
margin-top: 40px;
width: 90%;
height: 200px;
background-color: black;
`
const ProjectTitle = styled.h3`
color:gray;
`
const ProjectImage = styled.img`

`
const ProjectBox = () => {
  return (
    <Grid>
    <ProjectItem Image={"./Thriftter.png"} Text={"Thriffter MERN Stack"}></ProjectItem> 
    <ProjectItem Image={"./medinalakerealty.png"} Text={"Gatsby React Commercial Project"}></ProjectItem> 
    <ProjectItem Image={"./reactivities.png"} Text={"Thriffter MERN Stack"} URL={""}></ProjectItem> 
    <ProjectItem Image={"./Matthew_MalloryPortfolio.png"} Text={"Thriffter MERN Stack"}></ProjectItem> 
    </Grid>
  )
}

export default ProjectBox