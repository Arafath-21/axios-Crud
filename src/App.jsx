import React from 'react'
import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import Edit from './components/Edit'
import Home from './components/Home'
import TopBar from './components/TopBar'
export const API_URL = 'https://65927f02bb129707198fc4b4.mockapi.io/Blog'

function App() {
  return <>
    <div>
    <BrowserRouter>
    <TopBar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  </>
}

export default App