'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#problematica', label: 'Problemática' },
  { href: '#solucao', label: 'Solução' },
  { href: '#pitch', label: 'Pitch' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/0 shadow-md backdrop-blur-lg border-b-2 border-green-500 px-6 md:px-20">
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          {/* Logo com hover sutil */}
          <div className="flex-shrink-0 transition-transform duration-500 hover:scale-110">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="relative h-11 w-28">
                <Image
                  src="/imgs/krono-logo.svg"
                  alt="Krono Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-20">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-2xl font-medium text-[#f4f4f4] font-[Fonarto]
                             transition-all duration-300 hover:text-[#06D001] 
                             after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#06D001]
                             after:transition-all after:duration-500 hover:after:w-full hover:after:animate-glowLine"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-800 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile aberto */}
      {isOpen && (
        <div className="border-t border-gray-700/50 md:hidden" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-lg font-medium text-gray-100 hover:text-[#06D001] hover:bg-gray-800 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
