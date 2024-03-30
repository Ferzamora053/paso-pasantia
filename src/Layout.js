import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './CSS/Layout.css';

const Layout = () => {
    const location = useLocation();

    const isLoginPage = location.pathname === '/login' || location.pathname === '/';
    const isRegisterPage = location.pathname === '/register';

    return (
        <div className='layout'>
            {!isLoginPage && !isRegisterPage && <Navbar />}
            <div className='content'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;