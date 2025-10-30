import React, { useState } from 'react';

interface HeaderProps {
  resellerUrl: string;
}

const Header: React.FC<HeaderProps> = ({ resellerUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/catalogo.pdf', label: 'Catálogo', download: true },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" aria-label="Página Inicial da Modas PoPins">
          <img 
            src="https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/logo%20popins.avif" 
            alt="Modas PoPins Logo" 
            className="h-16 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-popins-gray hover:text-popins-red transition-colors font-medium"
              {...(link.download && { download: true, target: '_blank', rel: 'noopener noreferrer' })}
            >
              {link.label}
            </a>
          ))}
          <a
            href={resellerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-popins-red text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            Seja Revendedora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <svg className="w-6 h-6 text-popins-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={!link.download ? () => setIsMenuOpen(false) : undefined} 
                className="text-popins-gray hover:text-popins-red transition-colors font-medium text-lg"
                {...(link.download && { download: true, target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.label}
              </a>
            ))}
            <a
              href={resellerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-popins-red text-white font-bold py-3 px-8 rounded-full text-lg mt-4"
            >
              Seja Revendedora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;