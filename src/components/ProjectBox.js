import React from 'react'
import styled from 'styled-components'
import ProjectItem from './ProjectItem'
import { useContext } from 'react';
const Grid = styled.div`
width:auto;
height:60vw;
display: grid;
grid-template-columns: 33% 33% 33%;
margin-bottom: 150px;
@media (min-width:1000px){
  height:40vw;
  grid-template-columns: 25% 25% 25% 25%;
}
@media (max-width: 490px) {
    height:100vh;
    grid-template-columns: 50% 50%;
    grid-template-rows: 8fr 8fr 8fr 8fr;
    .text {
      font-size: 16px;
    }
@media (max-width: 300px) {
  height:100vh;
  grid-template-columns: 100% ;
  grid-template-rows: 8fr 8fr 8fr 8fr;
  .text {
    font-size: 16px;
  }
}
}
`;
const ProjectItem2 = styled.div`
display: flex;
align-items: center;
margin:10px;
margin-left:20px;
margin-top: 20px;
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
    <ProjectItem Tech={"React.js, Bootstrap, Node.js, Express.js, MongoDB, JavaScript, Google Cloud Storage, App Engine, Paypal"} URL="https://thriftter.com" Image={"./Thriftter.png"} Text={"Thriffter MERN Stack"}></ProjectItem> 
    <ProjectItem Tech={"Gatsby.js, Stapi CMA, PostgreSql, JavaScript, GraphQL"}Image={"./medinalakerealty.png"}URL="https://medinalake.app" Text={"Gatsby React Commercial Project"}></ProjectItem> 
    <ProjectItem Image={"./reactivities.png"} Text={"React C# .Net Social Activity Site"} URL={"https://reactivitiesmatthewmallory.herokuapp.com/"}></ProjectItem> 
    <ProjectItem Image={"./PortfolioMatthewMallory.png"} Text={"Gatsby.js Three.js Portfolio"} URL="/"></ProjectItem> 
    <ProjectItem Image={"./VestraVerse.png"}Text={"Vestra Verse Current Employment"} Tech={"Project Was build with Unreal and Node.js Helped setup the development enviroment programmed animations nft smart contracts, Developed Character Controller"}/>
    <ProjectItem Tech={"Gatsby.js, Stapi CMA, PostgreSql, JavaScript, GraphQL"}Image={"./medinalakerealty.png"} Text={"Front End Framework Typescript Project"}></ProjectItem> 
    </Grid>
  )
}

export default ProjectBox