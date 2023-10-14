import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>Header</header>
      <NavBar />
    </div>
  )
}

export default App
