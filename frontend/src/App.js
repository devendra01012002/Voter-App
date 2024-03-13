import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={< Home/>} />
        <Route path="/Login" element={< Login/>} />
        <Route path="/Signup" element={< SignUp/>} />
        {/* <Route path="/invalid" element={< InvalidPage/>} /> */}
      </Routes>
    </div>
  )
}

export default App