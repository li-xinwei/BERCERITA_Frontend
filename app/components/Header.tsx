'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#58cc02] h-16 sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 shadow-md">
      <div className="flex items-center">
        <Link href="/" className="text-white font-bold flex items-center">
          <div className="h-10 w-10 relative mr-2">
            <Image
              src="/assets/bercerita-logo.svg"
              alt="Bercerita Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl">BERCERITA</span>
        </Link>
        <nav className="hidden md:flex space-x-6 ml-8">
          <Link className="text-white font-medium hover:text-[#ffffffcc] transition-colors" href="/">
            Home
          </Link>
          <Link className="text-white font-medium hover:text-[#ffffffcc] transition-colors" href="/courses">
            Courses
          </Link>
          <Link className="text-white font-medium hover:text-[#ffffffcc] transition-colors" href="/practice">
            Practice
          </Link>
          <Link className="text-white font-medium hover:text-[#ffffffcc] transition-colors" href="/leaderboard">
            Leaderboard
          </Link>
        </nav>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-white text-[#58cc02] px-4 py-2 rounded-xl font-bold hover:bg-[#f7f7f7] transition-all">
          Log In
        </button>
        <button className="bg-[#ff4b4b] text-white px-4 py-2 rounded-xl font-bold hover:bg-[#e04343] transition-all">
          Sign Up
        </button>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <nav className="flex flex-col p-4">
            <Link 
              className="text-[#58cc02] font-medium py-2 hover:bg-[#f7f7f7] px-4 rounded"
              href="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              className="text-[#58cc02] font-medium py-2 hover:bg-[#f7f7f7] px-4 rounded"
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              className="text-[#58cc02] font-medium py-2 hover:bg-[#f7f7f7] px-4 rounded"
              href="/practice"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practice
            </Link>
            <Link 
              className="text-[#58cc02] font-medium py-2 hover:bg-[#f7f7f7] px-4 rounded"
              href="/leaderboard"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-200">
              <button className="bg-[#58cc02] text-white px-4 py-2 rounded-xl font-bold w-full">
                Log In
              </button>
              <button className="bg-[#ff4b4b] text-white px-4 py-2 rounded-xl font-bold w-full">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 