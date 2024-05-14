import React from 'react'
import Hero from "../Components/Hero"
import Navbar from '../Components/Navbar';
import womanpass from "../Assets/womanpass.jpg"
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName = "hero"
    heroImg = {womanpass}
    title = "Share your journey! " 
    text= "Write your story here "
    buttonText = "Post"
    url = "/blog"
    btnClass="show"
    />
    </> 
  )
}
