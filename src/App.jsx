import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Matriz from "./ejer5.jsx";
import Ventas from "./ejer6.jsx";
import Calificaciones from "./ejer7.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Matriz />
      <br />
      <hr />
      <Ventas />
      <br />
      <hr />
      <Calificaciones />
    </>
  )
}

export default App
