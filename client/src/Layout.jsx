import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components'

const Layout = () => {
    return (
        <div className='p-4'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout