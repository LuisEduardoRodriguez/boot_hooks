import { useEffect, useState } from 'react'

import './App.css'
import { UseReducer } from './assets/Components/UseReducer';

function App() {
  const [count, setCount] = useState(0)

  //useEffect se ejecuta despues de cada renderizacion
  useEffect(()=>{
    //Actualiza el titulo del documento con el contador de la pestaña
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <>

      <h1>React Hooks Practice</h1>
      <div className="card">
        <hr />
        <h2>Exercise Hook useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
      </div>
      <UseReducer count={count}/>

    </>
  )
}

export default App
