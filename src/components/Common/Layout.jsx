import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col justify-start items-center w-full overflow-x-visible overflow-hidden min-h-screen">
            <Header />
            <main className="w-full max-w-[1440px] mx-auto flex-grow pt-20 lg:pt-20 overflow-x-hidden">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
