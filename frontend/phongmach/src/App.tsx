import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import React from 'react';
import Link from "@mui/material/Link"; // ← MUI's Link component
import { Link } from "react-router-dom"; // ← React Router's Link component


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="Login" element = {<Login />}/>
        <Route path="Register" element = {<Register />}/>
      </Routes>
    </>
  )
}

export default App
