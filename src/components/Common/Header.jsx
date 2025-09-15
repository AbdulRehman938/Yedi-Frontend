import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 z-50 flex justify-center transition-all duration-300 ease-in-out w-full ${scrolled ? 'mt-2' : ''
                }`}
        >
            <div
                className={`flex justify-between items-center transition-all duration-300 ease-in-out bg-white shadow-lg ${scrolled
                    ? 'rounded-xl py-2 w-[92%] md:w-[88%] lg:w-[90%] px-5'
                    : 'bg-transparent w-full px-4 md:px-8 py-2'
                    }`}
                style={{ minHeight: '4rem' }}
            >
                {/* Left div - Logo */}
                <div className="h-full w-20 sm:w-32 flex items-center">
                    <img src="/Logo.svg" alt="logo" className="w-full h-full object-fill" />
                </div>

                {/* Middle div - Desktop Navigation */}
                <div
                    id="navbar"
                    className="hidden md:flex h-full items-center justify-center"
                    style={{
                        width: 'calc(100% - 20rem)',
                        maxWidth: '40rem',
                        margin: '0 1vw' // Creates a responsive gap that shrinks with viewport
                    }}
                >
                    <nav className="w-full flex justify-center" style={{ gap: '3vw' }}>
                        <Link
                            to="/"
                            className="text-primary font-semibold hover:scale-110 transition-all duration-300 whitespace-nowrap"
                            style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }} // Responsive font size
                        >
                            HOME
                        </Link>
                        <Link
                            to="/locations"
                            className="text-primary font-semibold hover:scale-110 transition-all duration-300 whitespace-nowrap"
                            style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}
                        >
                            LOCATIONS
                        </Link>
                        <Link
                            to="/locks"
                            className="text-primary font-semibold hover:scale-110 transition-all duration-300 whitespace-nowrap"
                            style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}
                        >
                            OUR LOCKS
                        </Link>
                        <Link
                            to="/about"
                            className="text-primary font-semibold hover:scale-110 transition-all duration-300 whitespace-nowrap"
                            style={{ fontSize: 'clamp(0.75rem, 1vw, 1rem)' }}
                        >
                            ABOUT US
                        </Link>
                    </nav>
                </div>

                {/* Right div - Partner Button */}
                <Link
                    to="/partner"
                    id="btn"
                    className="hidden md:flex h-full items-center justify-center rounded-full bg-[#B8B8A7] text-white font-semibold transition-all duration-300"
                    style={{
                        width: 'clamp(6rem, 8vw, 10rem)',
                        fontSize: 'clamp(0.7rem, 0.8vw, 0.9rem)',
                    }}
                >
                    <span className="whitespace-nowrap">BECOME A PARTNER</span>
                </Link>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        className="p-2 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Open menu"
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Animated dropdown */}
            <div
                className={`fixed top-0 ${scrolled ? 'right-[1.15rem] w-[calc(60%-2rem)]' : 'right-0 w-[50%]'} h-auto rounded-b-3xl bg-white shadow-lg z-40 transform transition-all duration-500 ease-in-out flex flex-col items-start md:hidden ${menuOpen
                    ? 'opacity-100 translate-y-[4rem]'
                    : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
                style={{ maxHeight: menuOpen ? '40%' : '0' }}
            >
                <nav className="w-full flex flex-col items-start p-6 gap-4">
                    <Link
                        to="/"
                        className="text-primary font-semibold hover:scale-110 transition-all duration-300 pl-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        HOME
                    </Link>
                    <Link
                        to="/locations"
                        className="text-primary font-semibold hover:scale-110 transition-all duration-300 pl-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        LOCATIONS
                    </Link>
                    <Link
                        to="/locks"
                        className="text-primary font-semibold hover:scale-110 transition-all duration-300 pl-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        OUR LOCKS
                    </Link>
                    <Link
                        to="/about"
                        className="text-primary font-semibold hover:scale-110 transition-all duration-300 pl-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        ABOUT US
                    </Link>
                    <Link
                        to="/partner"
                        className="h-10 flex items-center justify-center rounded-full bg-[#B8B8A7] text-white font-semibold transition-all duration-300 mt-2 ml-2"
                        style={{ width: 'clamp(10rem, 60%, 14rem)' }}
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="whitespace-nowrap text-sm">BECOME A PARTNER</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;