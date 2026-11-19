import { useState } from 'react'
import { Header } from './components/Header'
import { TaskBar } from './components/Taskbar'
import { MainShell } from './components/Main-shell'

function App() {


  return (
    <>
      <Header></Header>
      <MainShell></MainShell>
      <TaskBar></TaskBar>
    </>
  )
}

export default App
