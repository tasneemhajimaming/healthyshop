import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//components
import Navbar from './components/Navbar';
import Title from './components/Title';
import Pagemain from './components/Pagemain'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Title />
      <Pagemain />
    </>
  )
}

export default App
