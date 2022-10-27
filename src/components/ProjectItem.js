import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal } from './Modal'
import {AiFillGithub} from "react-icons/ai"
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
font-size: 5px;
&:hover{
    opacity: .9;
}
`
const ModalItem = styled.div`
width:90%;
height: 90%;
padding:10px;
display: flex;
flex-direction:column;


background-color: green;
`
const ModalImage = styled.img`
width:100%;
height: 50%;
border-radius: 10px;
box-shadow: 2px 5px 10-px black;
`
const ProjectItem = ({children,Text,Image,Tech}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <> 
    <ProjectBox Image={Image} onClick={()=>setIsModalVisible(true)}><ProjectText onClick={()=>setIsModalVisible(true)}>{Text}</ProjectText></ProjectBox>
    <Modal Visible={isModalVisible} setVisible={setIsModalVisible}>
      <>
    <ModalItem>
    <ModalImage src={Image}/>
    Tech: {Tech}
    <div><AiFillGithub></AiFillGithub></div>
    </ModalItem>
      </>
      </Modal>
    </>
   
  )
}

export default ProjectItem