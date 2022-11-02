import * as React from "react"
import {SiUnrealengine} from 'react-icons/si'

import {FaUnity,FaReact} from "react-icons/fa"
import{GrGatsbyjs,GrNode}from 'react-icons/gr'
import {SiTypescript,SiJavascript} from "react-icons/si"
import {BsFillBootstrapFill} from 'react-icons/bs'


import Message from "../components/Message"
import ProjectBox from "../components/ProjectBox"
import { Suspense, useState, useCallback, useEffect, useRef, useMemo,createContext} from 'react'
import { Canvas, useFrame,useLoader} from '@react-three/fiber'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import styled from 'styled-components'
import "../styles/global.css"

import { Modal } from "../components/Modal"
import IconBar from "../components/IconBar"

import * as THREE from 'three'
import { Vector3 } from "three"
import ContactForm from "../components/ContactForm"

const ContactSection = styled.section`
  margin: 0;
  width: auto;
  height: 100vh;
  background: #ecf0f3e4;
  display: flex;
  flex-direction:column;
  align-items: center;
  text-align: center;
  justify-content: center;
  place-items: center;
  overflow: hidden;
  font-family: poppins;
  padding-bottom: 50px;
  padding-top: 100px;
  margin-bottom: 100px;
  color: #4b4b4bfd;
  `
  

const ThemeContext = createContext(null);

function Scene() {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  
  useFrame((state, delta)  => {
    state.camera.position.x += (state.mouse.x-state.camera.position.x)*.2;
    state.camera.position.y += (state.mouse.y- state.camera.position.y)*.2;
    //state.camera.rotation.y = state.mouse.x*.01
   // state.camera.rotation.x = state.mouse.y*.01
    state.camera.lookAt(new Vector3(-state.mouse.x*.1,-state.mouse.y*.1,state.mouse.x))
   // the value will be 0 at scene initialization and grow each frame
  })
  const particlesCount = 200
const positions = new Float32Array(particlesCount * 3)
for(let i = 0; i < particlesCount; i++)
{
    positions[i * 3 + 0] = Math.random()
    positions[i * 3 + 1] = Math.random()
    positions[i * 3 + 2] = Math.random()
}
  const ref = useRef()
  const gltf = useLoader(GLTFLoader, '/trailer.glb')

  useFrame((state, delta) => (ref.current.rotation.y += delta/20))
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
font-size: 1rem;
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
  
    <main  id="Home" style={pageStyles}>
     <Message  Message="Hi, Matthew Mallory is Full Stack, Unreal Developer">

     </Message>
    
     <Canvas 
     
      camera={{ fov: 12, position: [0, 0, 30] }}
      
     style={{height:"100vh",position:"fixed"}}>
      <ambientLight intensity={0} />
      
      <Scene></Scene>
    </Canvas>
     <section  style={{height:"60vh"}}>
  
</section>
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
    <section className="reveal" id="About"style={{height:"auto",width:"100%"}}>
      <HeadText className="reveal">
      About Me
    </HeadText>
    <AboutMe>
    A little bit about Matthew. 
    Matthew been writing software professionally for about 2 year.
    He is currently working as a Developer working on Blockchain integration for VestraVerse.
    Matthew have over 3 years experience developing indie Video games. 
    Matthew also been coding smart contracts for the last year, integrating unreal with polygon.
     He has written block chain contracts that utilize avve protocol for flash loans and exploiting arbitrage opportunities.
     Matthew has developed many websites for small buisness from realestate to ecommerce solutions utilizing React and angular. 
     Building custom backend solution utilizing Json, Rest, Json webtokens, and other security best practices. 
    </AboutMe>
    </section>
    <ContactSection className="reveal" id="Contact">
    <h2 className="reveal">
      Lets Keep in Touch:
    </h2>
      
    
    <ContactForm className="reveal">

    </ContactForm>
    <div>
      
    </div>
    <div>
      
    </div>
    </ContactSection>
    <section id="">

    </section>
   
    <IconBar></IconBar>
    <Modal Visible={isModalVisible} setVisible={setIsModalVisible}>Hello World</Modal>
    </main>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
