import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [countb, setCountb] = useState(0);
  const [robot, setRobot] = useState([]);

  // 1 - useEffect utilização
  useEffect(() => {
    console.log("Roda a cada renderização");
  })

  // 2 - array de dependências 
  useEffect(() => {
    console.log("Só roda ao incrementar valor!");
  }, [countb])

  // 3 - array de dependências vazio
  useEffect(() => {
    console.log("só executa uma vez")
  }, [])

  // 4 - clean up function
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`O incrementador foi alterado ${count} vezes.`);
    }, [2000]);

    return () => {
      clearTimeout(timer);
    };

  }, [count]);

  // 5 - fetch com useEffect
  useEffect(() => {
    fetch("http://localhost:8080/automations/all")
      .then((res) => res.json())
      .then((json) => setRobot(json));
  }, []);

  return <div className='App'>
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)} > Renderizar</button>
      <p>{count}</p>
    </div>

    <div>
      <button onClick={() => setCountb((prevCountb) => prevCountb + 1)} > Renderizar B</button>
      <p>{countb}</p>
    </div>

    {/* não está trazendo os dados do robo 07 11 2023 */}
    {robot && (
      <div>
        <p>Dados do Robo</p>
        <h1>Nome: {robot.nomeAutomacao}</h1>
        <h4>Cliente: {robot.cliente}</h4>
        <h4>status: {robot.statusAutomacao}</h4>
      </div>
    )}
  </div >;

}

export default App
