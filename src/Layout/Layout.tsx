import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'

const Layout = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contacts' element={<Contact />} />
        </Routes>
    </div>
  )
}

export default Layout