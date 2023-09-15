import './App.css';


// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';


// 4 - navegando entre páginas
import { Navbar } from './componentes/Navbar';

function App() {
  return (
      <div className='App'>
        <Navbar />
        <h2> React Router </h2>
        <Outlet />
        <p>Footer</p>
      </div> 
  );
}

export default App;