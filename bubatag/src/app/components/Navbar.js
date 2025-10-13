'use client'; // Necessário para usar hooks como o useState

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Para evitar repetição de código, definimos os links de navegação em um array
const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#problematica', label: 'Problemática' },
  { href: '#solucao', label: 'Solução' },
  { href: '#pitch', label: 'Pitch' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/0 shadow-md backdrop-blur-lg border-b-2 border-green-500 pl-20 pr-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="relative h-11 w-28">
                {' '}
                {/* Ajuste o tamanho do contêiner da logo aqui */}
                <Image
                  src="/imgs/krono-logo.svg"
                  alt="Krono Logo"
                  fill
                  className="object-contain"
                  priority // Ajuda a carregar a logo mais rápido
                />
              </div>
            </Link>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-20">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-xl font-medium text-[#f4f4f4] font-[Fonarto] transition-colors hover:text-[#06D001] hover:drop-shadow(0_0px_10px_rgba(144,169,85,0.5)"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Botão Hamburger (Menu Mobile) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? (
                // Ícone "X" para fechar
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Ícone "Hamburger" para abrir
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Painel do Menu Mobile */}
      {isOpen && (
        <div className="border-t border-gray-200/50 md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar em um link
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
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