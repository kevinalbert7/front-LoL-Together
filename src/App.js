import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { UserContextProvider } from './contexts/UserContext'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from "./pages/Signup"
import UserProfile from "./pages/UserProfile"
import TeamProfile from "./pages/TeamProfile"
import Users from "./pages/Users"
import Teams from "./pages/Teams"
import NotFound from './pages/NotFound'
import Test from './pages/Test'

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/team/:id" element={<TeamProfile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
