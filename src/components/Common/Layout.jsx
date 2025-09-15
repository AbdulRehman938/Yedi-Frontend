import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex-1 w-full pt-[4.5rem] pb-8">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
