import { useState } from 'react'
import NavBar from './components/NavBar'
import { GiHamburgerMenu } from
  'react-icons/gi'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className='App'>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </header>
      <NavBar show={showNav}/>
      <Outlet />
    </div>
  )
}

export default App
