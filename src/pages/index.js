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
font-size: 40px;
`
const SkillBadges = styled.div`
width: 100%;
height: 90%;
display: grid;
grid-template-columns: 10% 10% 10% 10%;
align-items: center;
justify-content: space-evenly;
font-size: 100px;
color: white;
& svg:hover{
  font-size: 120px;
  color: lightcyan;
  text-shadow: 10px 10px 10px gray;
  transition: all .5s ease-in
}
`

const IndexPage = () => {
  const [isDark, setIsDark] = useState(false);

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
     <Message Message="Hi, I'm Matthew Mallory a Web Developer/ Web3 Developer">

     </Message>
     <Canvas className="reveal"style={{height:"90vh"}}>
      <ambientLight intensity={0} />
   
      
      <Scene></Scene>
    </Canvas>
    <section id="Project" className="reveal">
      <HeadText>
      Projects:
    </HeadText>
    <ProjectBox></ProjectBox>
    </section>
    <section className="reveal" id="Skills" style={{height:"100vh"}} >
      
    <HeadText>
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
    <section id="WorkHistory"style={{height:"100vh"}}>
      <HeadText className="reveal">
      About Me
    </HeadText>
    </section>
    <section className="reveal" id="Contact"style={{height:"100vh",display:"flex",alignItems:"center", justifyContent:"center",backgroundColor:"grey"}}>
    <HeadText>
      Contact:
    </HeadText>
    </section>
    <section id="">

    </section>
    <ScrollToTop></ScrollToTop>
    </main>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
