import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Adview from './components/Adview'
import Bedit from './components/Bedit'
import Profile from './components/Profile'
import Homep from './components/Homep'
import Books from './components/Books'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homep/>}/>
      <Route path="/b" element={<Books/>}/>
      <Route path="/s" element={<Signup/>}/>
      <Route path="/av" element={<Adview/>}/>
      <Route path="/be" element={<Bedit/>}/>
      <Route path="/p" element={<Profile/>}/>
      <Route path="*" element={<div>Page not found</div>}/>
      </Routes>
    </>
  )
}

export default App
