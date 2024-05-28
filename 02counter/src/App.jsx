import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 15

  const addValue = () => {
    counter += 1
    console.log(counter)
    setCounter(counter);
  }

  const RemoveValue = () => {
    counter = counter - 1;
    console.log(counter);
    setCounter(counter);
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter} </h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
