import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal } from './Modal'
import {AiFillGithub} from "react-icons/ai"
const ProjectBox = styled.div`
width: auto;
height: auto;

background-color:  #073d73ec;
position: relative;
box-shadow: 3px 3px 5px #000000d9;
background-image: url(${props =>props.Image|| "./Thriftter.png"});
margin:3px;
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
background-color:  #073d73ec;
border-radius: 10px;
color: #ffffffff;
text-align: center;
transition: all .3s ease-in-out;
font-size: 25px;
&:hover{
    opacity: .9;
}
`
const ModalItem = styled.div`
width:auto;
height: 80%;
padding:10px;
display: flex;
flex-direction:column;
align-items: center;
border-radius: 10px;
background-color:  #07519cc4;
color:#dededefc;
`
const ModalImage = styled.img`
width:100%;
height: 100%;
border-radius: 10px;
margin-bottom: 5%;
box-shadow: 2px 5px 10px black;
`
const ProjectItem = ({children,Text,Image,Tech,URL}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <> 
    <ProjectBox Image={Image} onClick={()=>setIsModalVisible(true)}><ProjectText onClick={()=>setIsModalVisible(true)}>{Text}</ProjectText></ProjectBox>
    <Modal Visible={isModalVisible} setVisible={setIsModalVisible}>
      <>
    <ModalItem>
      <a href={URL} style={{width:"70%",height:"40%",paddingBottom:"20px"}}>
    <ModalImage src={Image} href={URL}/>
    </a>
    Tech: {Tech}
    <div><AiFillGithub></AiFillGithub></div>
    </ModalItem>
      </>
      </Modal>
    </>
   
  )
}

export default ProjectItem