import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../components/Common/header.css';

const Header = () => {
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'LOCATIONS', path: '/locations' },
    { name: 'OUR LOCKS', path: '/locks' },
    { name: 'ABOUT US', path: '/about' },
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(null);
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });
  const navRef = React.useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const links = navRef.current.querySelectorAll('.nav-link');
      if (links[hoverIdx ?? activeIdx]) {
        const rect = links[hoverIdx ?? activeIdx].getBoundingClientRect();
        const parentRect = navRef.current.getBoundingClientRect();
        setBarStyle({ left: rect.left - parentRect.left, width: rect.width });
      }
    }
  }, [activeIdx, hoverIdx]);

  return (
    <div className={`fixed top-0 left-0 z-50 flex justify-center w-full transition-all duration-300 ${scrolled ? 'mt-2' : ''}`}>
      <div className={`flex justify-between items-center transition-all ease-in-out ${scrolled ? 'rounded-xl py-2 w-[92%] md:w-[88%] lg:w-[90%] px-5 bg-white' : 'w-full px-4 md:px-8 py-2 bg-transparent'}`} style={{ minHeight: '4rem' }}>
        {/* Logo */}
        <div className="h-full w-20 sm:w-32 flex items-center">
          <img src="/Logo.svg" alt="logo" className="w-full h-full object-fill" />
        </div>

        {/* Navbar */}
        <div id="navbar" className="hidden md:flex items-center justify-center relative" style={{ width: 'calc(100% - 20rem)', maxWidth: '40rem' }}>
          <nav ref={navRef} className="w-full flex justify-center relative gap-[3vw]">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link text-primary font-semibold transition-all duration-300 hover:scale-110"
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
                onClick={() => setActiveIdx(idx)}
              >
                {link.name}
              </Link>
            ))}
            <div
              className="absolute bg-primary rounded transition-all duration-300"
              style={{ left: barStyle.left, width: barStyle.width, height: '2px', bottom: '-8px' }}
            />
          </nav>
        </div>

        {/* Partner Button */}
        <Link to="/partner" id="partner-btn" className="hidden md:flex items-center justify-center rounded-full overflow-hidden relative">
          <span className="btn-text">BECOME A PARTNER</span>
          <span className="btn-fill" />
        </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button className="p-2 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
