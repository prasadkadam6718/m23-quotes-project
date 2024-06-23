import React from 'react'
import HomeNavbar from './HomeNavbar'
import HomeAside from './HomeAside'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <HomeNavbar />
      <div className='d-flex'>
        <HomeAside />
        <Outlet />
      </div>
    </div>
  )
}

export default HomePage