import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { UserContextProvider } from './contexts/UserContext'

import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
