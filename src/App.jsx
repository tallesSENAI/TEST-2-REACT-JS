import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cabecalho from './componente-cabecalho/cabecalho.jsx'
import Tarefas from './tarefas/tarefas-componente.jsx'
import './App.css'


function App() { //FUNÇÃO = COMPONENTE

  return(
    <>
      <Cabecalho />
      <Tarefas />
    </>
  );



  // return(
  //   //'<></>' é uma TAG CORINGA, ela agrupa os elementos e os retorna na tela
  //   <> 
  //   <h1>Ola Mundo</h1>
  //   <h2>SubTitulo</h2>
  //   </>
  // ); //o 'return' escrito desta forma = "return();" não afeta o funcionamento do código
  

  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App //exportanto componente/função
