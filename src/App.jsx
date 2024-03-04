import React,{useState} from "react"
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Content from './components/Content.jsx'
import axios from "axios"


function App() {
  
 // const url = `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=9eecc962315d7d019a25cb291a4e5b3a`
 

  return (
    <>
    <Header/>
    <Navigation/>
    <Content />

    </>
  )
}

export default App
