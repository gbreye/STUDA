import { useState } from 'react'
import { Header } from './components/Header'
import { TaskBar } from './components/Taskbar'
import { MainShell } from './components/Main-shell'

function App() {


  return (
    <>
      <Header></Header>
      <div className="dot-grid vw-100 vh-100">
      </div>
      <MainShell></MainShell>
      <TaskBar></TaskBar>
    </>
  )
}

export default App
