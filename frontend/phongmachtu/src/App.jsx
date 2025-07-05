import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo1 from './assets/logo1.jpg'
import Footer from './components/Footer';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Content from './components/Content';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
    <Header />
    <NavigationMenu />
    <Content />
    <MainContent/>
    <Content />
    <Footer />

   

    {/* <div className="left" style={{ width: '40%', float: 'left', backgroundColor: "#cceeff"
     }}>
      <img src = {logo1} alt=""/>

    </div>

      <div className="right" style={{ width: '60%', float: 'right', backgroundColor: 'blue' }}>
        <p>This is a paragraph.</p>
        <p>This is a paragraph.2</p>
      </div> */}
  </>
  )
}

export default App;
