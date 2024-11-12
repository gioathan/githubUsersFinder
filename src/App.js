import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home'
import UserDisplay from './pages/UserDisplay' 
import UserRepositories from './pages/UserRepositories'
import UserFollowers from './pages/UserFollowers'
import Header from './components/Header'
import UserDoesntExist from './pages/UserDoentExist'
import Footer from './components/Footer'
import UsernameCheck from './components/UsernameCheck'


function App() {

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#343a40', 
        color: 'white' 
      }}
      >
      <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/users/:username" element={<UserDisplay />} />
            <Route path="/repos/:username" element={<UserRepositories />} />
            <Route path="/followers/:username" element={<UserFollowers />} />
            <Route path="/notfound" element={<UserDoesntExist />} />
            <Route path="/check/:username" element={<UsernameCheck />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
