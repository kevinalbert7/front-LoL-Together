import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ContactPage from "./pages/ContactPage"
import CreateTeamPage from "./pages/CreateTeamPage"
import UserProfilePage from "./pages/UserProfilePage"
import UsersPage from "./pages/UsersPage"
import TeamProfilePage from "./pages/TeamProfilePage"
import TeamsPage from "./pages/TeamsPage"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/createteam" element={<CreateTeamPage />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/teamprofile" element={<TeamProfilePage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
