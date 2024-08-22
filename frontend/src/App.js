import React from 'react';
import Index from './pages/Index'
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/auth';
import Dashboard from './components/Dashboard/Dashboard';
import UserDashboard from './components/UserDashboard/UserDashboard';
import './style.css'
import EditEvent from './utils/Cards/EditEvent';
import Login from './components/auth/Login';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/signup' element={<Auth/>} />
        <Route path = '/login' element={<Login/>}/>
        <Route path='/userDashboard' element={<UserDashboard/>} />
        <Route path='/*' element={<Dashboard />} />
        <Route path='/event/:id/edit' element={<EditEvent/>} />
      </Routes>
    </>
  )
}
export default App