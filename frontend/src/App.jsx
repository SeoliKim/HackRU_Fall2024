import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
