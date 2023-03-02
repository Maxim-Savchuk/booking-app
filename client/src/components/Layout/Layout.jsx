import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './Navbar.jsx'

const Layout = () => {
    return (
        <div className='py-4 px-8 flex flex-col min-h-screen font-medium'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout