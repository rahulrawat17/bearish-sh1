import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Dashboard } from './components/Dashboard'
import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Dashboard />
    </div>
  )
}

export default App
