import { useState } from 'react'
import './App.css'
import UseStorage from './Components/UseStorage'

function App() {
  const [state, setState] = UseStorage('key','')

  return (
    <>
      <input onChange={(e)=>setState(e.target.value)} type="text" value={state}></input>
    </>
  )
}

export default App
