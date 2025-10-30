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

const handleScrollToSection = (e, href) => {
  e.preventDefault();
  const id = href === '/' ? 'home' : href.substring(1);
  const targetElement = document.getElementById(id);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } else if (href === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (e, href) => {
    handleScrollToSection(e, href);
    setIsOpen(false);
  };

  return (
    <nav
      data-aos="fade-down"
      data-aos-easing="ease"
      data-aos-duration="800"
      className="fixed top-0 right-0 z-50 w-full bg-white/0 shadow-md backdrop-blur-lg border-b-2 border-green-500 px-4 sm:px-6 md:px-20"
    >
      {/* Removido o container para mobile */}
      <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between w-full">
          
        {/* LOGO */}
        <div className="flex-shrink-0 transition-transform duration-500 hover:scale-110 hidden sm:block">
          <Link
            href="#home"
            onClick={(e) => handleNavLinkClick(e, '#home')}
          >
            <div className="relative h-10 sm:h-11 w-24 sm:w-28">
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
        <div className="hidden md:flex ml-10 space-x-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="relative px-3 py-2 text-2xl font-medium text-[#f4f4f4] font-[Fonarto]
                transition-all duration-300 hover:text-[#06D001] 
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#06D001]
                after:transition-all after:duration-500 hover:after:w-full hover:after:animate-glowLine"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botão Mobile */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="relative flex h-4 w-4 flex-col justify-between items-center group"
          >
            <span
              className={`h-0.5 w-full bg-gray-100 rounded-lg transition-transform duration-300 ease-in-out 
              ${isOpen ? 'rotate-45 translate-y-2 bg-[#06D001]' : ''}`}
            />
            <span
              className={`h-0.5 w-full bg-gray-100 rounded-lg transition-opacity duration-300 ease-in-out
              ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`h-0.5 w-full bg-gray-100 rounded-lg transition-transform duration-300 ease-in-out 
              ${isOpen ? '-rotate-45 -translate-y-2 bg-[#06D001]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="border-t border-gray-700/50 md:hidden w-full" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
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
