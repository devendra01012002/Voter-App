import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Home from './Components/Home/Home'
import Navbar from './Components/partials/Navbar'

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
         <Route path="/" element={< Home/>} />
        <Route path="/Login" element={< Login/>} />
        <Route path="/signup" element={< SignUp/>} />
        {/* <Route path="/invalid" element={< InvalidPage/>} /> */}
      </Routes>
    </React.Fragment>
  )
}

export default App