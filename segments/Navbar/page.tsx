// components/Navbar.tsx
'use client'; // Required for useState, useEffect in App Router

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link'; // Changed from 'react-scroll'
import { usePathname } from 'next/navigation'; // Added for active state
import gsap from 'gsap';
import { CgMenuRight } from 'react-icons/cg';

import NeunorthLogo from '@/components/NeunorthLogo/page';
import Socials from '@/components/Socials/page';
import Sidebar from '@/components/Sidebar/page';
import { navRoutes } from '@/constants/data';
import { convertHexToRgba } from '@/util/page';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current path for active state

  // Handle scroll-based navbar background & blur
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 200);
  };

  // Memoized scroll listener (correct use of useMemo + useEffect)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP entrance animation on mount
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      '#navbar .logo',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        '#navbar .socials',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        '#navbar .route-wrapper .route',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        },
        '-=0.5'
      );
  }, []);

  return (
    <>
      <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'blur drop' : ''
        }`}
        style={{
          background: isScrolled
            ? convertHexToRgba('--bg-base', 0.8)
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        }}
        aria-label="Main navigation"
      >
        {/* Make logo a link to home */}
        <Link href="/" className="logo-link">
          <NeunorthLogo />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="route-wrapper hidden md:flex" aria-hidden="false">
          {navRoutes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`route ${pathname === route.path ? 'active' : ''}`}
            >
              {route.name}
            </Link>
          ))}
        </div>

        <Socials />

        {/* Mobile Menu Toggle */}
        <button
          className="menu md:hidden"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isSidebarOpen}
          aria-controls="mobile-sidebar"
        >
          <CgMenuRight size={28} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;