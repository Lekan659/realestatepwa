import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Footie from '../Footie/Footie'

const Layout = () => {
  return (
    <>
    <div>
        <Header/>
        <Outlet/>
    </div>
    <Footie/>
    </>
  )
}

export default Layout