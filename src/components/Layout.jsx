import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-[#4776E6] to-[#8E54E9]">
        <Navbar/>
        <Outlet/>
    </div>
  );
}

export default Layout