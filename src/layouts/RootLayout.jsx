import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout
