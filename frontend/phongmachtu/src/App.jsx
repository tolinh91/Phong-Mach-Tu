import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo1 from './assets/logo1.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="left" style={{ width: '40%', float: 'left', backgroundColor: "#cceeff"
     }}>
      <img src = {logo1} alt=""/>

    </div>

      <div className="right" style={{ width: '60%', float: 'right', backgroundColor: 'blue' }}>
        <p>This is a paragraph.</p>
        <p>This is a paragraph.2</p>
      </div>
    </>
  )
}

export default App
