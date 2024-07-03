import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
// import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react' // Import React to use React.Fragment

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Footer/>
    </React.Fragment>
  )
}

export default App
