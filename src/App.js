import { useState } from 'react'
import Counter from './components/Counter'
import Timer from './components/Timer'
import Pokedex from './components/Pokedex'

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <div className='App'>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {/* {show && <Counter />} */}
      {/* {show && <Timer /> */}
      {show && <Pokedex />}
    </div>
  )
}

export default App
