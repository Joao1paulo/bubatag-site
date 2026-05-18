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

  // Classes do mobile (mantendo sua fonte e cor de hover)
  const mobileLinkClasses = 
    "text-xl font-[Fonarto] text-white hover:text-[#06D001] transition-colors py-4 text-center w-full block border-b border-white/10";

  return (
    <nav
      data-aos="fade-down"
      data-aos-easing="ease"
      data-aos-duration="800"
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b-2 border-[#06D001]"
    >
      <div className="relative flex items-center justify-between max-w-6xl mx-auto px-6 lg:px-8 py-4 h-[72px]">
        
        {/* LOGO */}
        <div className="flex-shrink-0 transition-transform duration-500 hover:scale-110 z-50">
          <Link
            href="#home"
            onClick={(e) => handleNavLinkClick(e, '#home')}
            className="flex items-center"
          >
            <div className="relative h-10 sm:h-11 w-24 sm:w-28">
              <Image
                src="/imgs/simbolo.svg"
                alt="Krono Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Links Desktop (Centralizados de forma absoluta igual ao código 2) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-10 lg:gap-12 items-center w-max">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="relative px-3 py-2 text-2xl font-medium text-[#f4f4f4] font-[Fonarto]
                transition-all duration-300 hover:text-[#06D001] hover:scale-110
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#06D001]
                after:transition-all after:duration-500 hover:after:w-full hover:after:animate-glowLine"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botão Hambúrguer Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 space-y-1.5 focus:outline-none group"
          aria-label="Menu"
        >
          <span className={`block w-8 h-[3px] bg-white rounded transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5 !bg-[#06D001]' : ''}`} />
          <span className={`block w-8 h-[3px] bg-white rounded transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-8 h-[3px] bg-white rounded transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2 !bg-[#06D001]' : ''}`} />
        </button>

        {/* Espaçador para manter o justify-between balanceado no Desktop */}
        <div className="w-[112px] hidden md:block"></div>
      </div>

      {/* Menu Mobile Dropdown Animado */}
      <div 
        className={`md:hidden absolute top-[72px] left-0 w-full bg-black/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] border-b-2 border-[#06D001] shadow-2xl' : 'max-h-0'}`}
      >
        <div className="flex flex-col items-center px-6 pb-6 pt-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className={`${mobileLinkClasses} ${index === navLinks.length - 1 ? 'border-none' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}