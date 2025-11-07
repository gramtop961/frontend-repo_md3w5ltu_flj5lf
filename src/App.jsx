import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import SearchPage from './components/SearchPage'
import MasterProfile from './components/MasterProfile'
import UserDashboard from './components/UserDashboard'
import Booking from './components/Booking'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/master/:id" element={<MasterProfile />} />
          <Route path="/account" element={<UserDashboard />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
