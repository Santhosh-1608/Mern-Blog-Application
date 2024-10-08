import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Dashboard from '../src/pages/Dashboard'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Projects from './pages/Projects';
import Header from './components/Header'
export default function App(){
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path = '/sign-up' element={<SignUp />}></Route>
    <Route path='/sign-in' element={<SignIn />}></Route>
    <Route path = '/projects' element={<Projects />}></Route>

   </Routes>
   </BrowserRouter>
  )
}
