import * as React from "react"
import {SiUnrealengine} from 'react-icons/si'
import {FaUnity,FaReact} from "react-icons/fa"
import{GrGatsbyjs,GrNode}from 'react-icons/gr'
import {SiTypescript,SiJavascript} from "react-icons/si"
import {BsFillBootstrapFill} from 'react-icons/bs'
import NavBar from "../components/NavBar"
import Message from "../components/Message"
import ProjectBox from "../components/ProjectBox"
import { useRef, useState,Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import styled from 'styled-components'
import "../styles/global.css"
import ScrollToTop from "../components/ScrollToTop"
import { createContext, useContext,useEffect } from 'react';
import { Modal } from "../components/Modal"

const ThemeContext = createContext(null);

function Scene() {
  const ref = useRef()
  const gltf = useLoader(GLTFLoader, '/trailer.glb')

  useFrame((state, delta) => (ref.current.rotation.y += delta/4))
  return (
    <Suspense fallback={null}>
      <primitive ref={ref} object={gltf.scene} position={[0,-1.5,-1]} />
    </Suspense>
  )
}


const pageStyles = {
  height:"200%",
  color: "#232129",
 
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  
}

const HeadText = styled.h3`
color:white;
margin:20px;
font-size: 30px;
@media (max-width: 400px) {
  font-size: 20px;
  margin:5px;
}
@media (min-width:1000){
  font-size: 50px;
}

`
const SkillBadges = styled.div`
width: 100%;
height: 90%;
display: grid;
grid-template-columns: 10% 10% 10% 10%;
align-items: center;
justify-content: space-evenly;
font-size: 70px;
color: white;

& svg:hover{
  font-size: 100px;
  color: lightcyan;
  text-shadow: 10px 10px 10px gray;
  transition: all .5s ease-in;
  &:div:hover{
    opacity:1;
  }
}
@media (max-width: 400px) {
  font-size: 40px;
  margin:5px;
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
const AboutMe = styled.div`
display:flex;
justify-content: center;
width:auto;
height:auto;
color: white;
font-size: 1.5rem;
background-color:#3f6c61;
align-items: center;
padding:50px;
`

const IndexPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);
  }, [, isDark]);


  return (
  
    <main style={pageStyles}>
     <NavBar>

     </NavBar>
     <Message Message="Hi, I'm Matthew Mallory a Developer">

     </Message>
     <Canvas className="reveal"style={{height:"90vh"}}>
      <ambientLight intensity={0} />
   
      
      <Scene></Scene>
    </Canvas>
    <section id="Project" className="reveal">
      <HeadText  className="reveal">
      Projects:
    </HeadText>
    <ProjectBox></ProjectBox>
    </section>
    <section className="reveal" id="Skills" style={{height:"100vh"}} >
      
    <HeadText className="reveal">
      Skills:
    </HeadText>
      <SkillBadges>
        <SiUnrealengine></SiUnrealengine>
        <FaUnity/>
        <FaReact/>
        <GrGatsbyjs/>
        <GrNode/>
        <BsFillBootstrapFill/>
        <SiTypescript/>
        <SiJavascript/>
      </SkillBadges>
    </section>
    <section className="reveal" id="WorkHistory"style={{height:"auto"}}>
      <HeadText className="reveal">
      About Me
    </HeadText>
    <AboutMe>
    A little bit about me. I have been writing software for about 10 year. I’m currently working as a Developer working on Blockchain integration for VestraVerse. I have over 4 1/2 years experience developing Video games. I have also been coding smart contracts for the last year and half integrating unreal with polygon block chain. I have written block chain contracts that utilize avve protocol for flash loans and exploting arbitrage opertunities. I'm also working on a project to create decentralized software sharing and distribution service. 
    </AboutMe>
    </section>
    <section className="reveal" id="Contact"style={{height:"100vh",display:"flex",alignItems:"center", justifyContent:"center",backgroundColor:"grey"}}>
    <HeadText>
      Contact:
    </HeadText>
    </section>
    <section id="">

    </section>
    <ScrollToTop></ScrollToTop>
    <Modal Visible={isModalVisible} setVisible={setIsModalVisible}>Hello World</Modal>
    </main>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
