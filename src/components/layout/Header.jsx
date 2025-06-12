import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo-container">
          <div className="logo-symbol">
            <Image 
              src="/images/ecoss_logo_simbolo.png" 
              alt="Ecoss Engenharia" 
              width={50}
              height={50}
              priority
              className="logo-img"
            />
          </div>
          <div className="logo-text">
            <span className="company-name">Ecoss Engenharia</span>
          </div>
        </Link>
        
        <nav className="nav-desktop">
          <ul className="nav-menu">
            <li>
              <Link href="/" className="active">
                Início
              </Link>
            </li>
            <li className="relative group service-dropdown">
              <button className="flex items-center service-button">
                Serviços
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1 service-menu">
                  <Link href="/servicos/engenharia-civil" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Engenharia Civil
                  </Link>
                  <Link href="/servicos/energia-solar" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Energia Solar
                  </Link>
                  <Link href="/servicos/engenharia-ambiental" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Engenharia Ambiental
                  </Link>
                  <Link href="/servicos/incorporacao-imobiliaria" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Incorporação Imobiliária
                  </Link>
                  <Link href="/servicos/construcao-civil" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Construção Civil
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="/projetos">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/calculadoras">
                Calculadoras
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="flex items-center">
          <Link href="/contato" className="btn btn-primary btn-cta hidden md:block">
            Solicitar Orçamento
          </Link>
          
          <div className="hamburger md:hidden" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <nav className={`nav-mobile ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link href="/" onClick={toggleMobileMenu}>
              Início
            </Link>
          </li>
          <li>
            <button className="flex items-center justify-between w-full">
              Serviços
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="pl-4 border-l border-gray-100 mt-2 space-y-2">
              <Link href="/servicos/engenharia-civil" onClick={toggleMobileMenu}>
                Engenharia Civil
              </Link>
              <Link href="/servicos/energia-solar" onClick={toggleMobileMenu}>
                Energia Solar
              </Link>
              <Link href="/servicos/engenharia-ambiental" onClick={toggleMobileMenu}>
                Engenharia Ambiental
              </Link>
              <Link href="/servicos/incorporacao-imobiliaria" onClick={toggleMobileMenu}>
                Incorporação Imobiliária
              </Link>
              <Link href="/servicos/construcao-civil" onClick={toggleMobileMenu}>
                Construção Civil
              </Link>
            </div>
          </li>
          <li>
            <Link href="/projetos" onClick={toggleMobileMenu}>
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/calculadoras" onClick={toggleMobileMenu}>
              Calculadoras
            </Link>
          </li>
          <li>
            <Link href="/sobre" onClick={toggleMobileMenu}>
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/contato" onClick={toggleMobileMenu}>
              Contato
            </Link>
          </li>
          <li>
            <Link href="/contato" className="btn btn-primary" onClick={toggleMobileMenu}>
              Solicitar Orçamento
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
