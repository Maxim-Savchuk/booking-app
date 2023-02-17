import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '.'

const Layout = () => {
    return (
        <div className='p-4 flex flex-col min-h-screen font-medium'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout