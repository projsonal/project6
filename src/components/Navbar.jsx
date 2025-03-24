import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}>
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={scrolled ? '/logo-dark.png' : '/logo-white.png'} alt="Logo ULBI" className="w-10 h-10 object-contain" />
          <span className="font-bold text-lg whitespace-nowrap">ULBI</span>
        </div>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><Link to="home" smooth className="cursor-pointer hover:text-indigo-400">Home</Link></li>
          <li><Link to="about" smooth className="cursor-pointer hover:text-indigo-400">About</Link></li>
          <li><Link to="portfolio" smooth className="cursor-pointer hover:text-indigo-400">Portfolio</Link></li>
          <li><Link to="contact" smooth className="cursor-pointer hover:text-indigo-400">Contact</Link></li>
        </ul>
        <div className="md:hidden">
          {/* Tambahkan menu toggle responsif jika ingin */}
        </div>
      </nav>
    </header>
  );
}
