import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Dashboard } from './components/Dashboard'
import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path=''
            element={
              <Fragment>
                <NavBar />
                <Header />
                <Dashboard />
              </Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
