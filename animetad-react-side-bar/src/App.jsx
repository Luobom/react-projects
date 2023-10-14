import { useState } from 'react'
import NavBar from './components/NavBar'
import { GiHamburgerMenu } from
  'react-icons/gi'
import './App.css'

function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <div>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </header>
      <NavBar show={showNav}/>
    </div>
  )
}

export default App
