import logo from './logo.svg'
import './App.css'
import ClassComponent from './components/ClassComponent'
import { useState } from 'react'
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className='App'>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && (
        <>
          <ClassComponent name='Matilde' />
          <FunctionalComponent name='Kevin' />
        </>
      )}
    </div>
  )
}

export default App
