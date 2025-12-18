import React from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navLinks = [
    { name: "Enjeux", href: "#problem" },
    { name: "La Solution", href: "#solution" },
    { name: "Modules", href: "#features" },
    { name: "Offres", href: "#offers" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 lg:h-24 items-center">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="relative flex items-center justify-center">
              <img 
                src="https://drive.google.com/thumbnail?id=1fuy_xQJH5LZGyoPu_0Hc7-pDsrnIPuF6&sz=w400" 
                alt="Logo R.I.C.E" 
                className="h-10 md:h-12 lg:h-16 w-auto object-contain"
                style={{ 
                  mixBlendMode: 'multiply',
                  filter: 'brightness(1.1) contrast(1.05)' 
                }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-slate-900 tracking-tight leading-none text-xl md:text-2xl lg:text-4xl">R.I.C.E</span>
              <span className="text-[8px] md:text-[10px] lg:text-sm uppercase tracking-wider text-slate-500 font-medium mt-0.5">Pilotage Réglementaire & QHSE</span>
            </div>
          </div>

          {/* Desktop Nav - visible only on Large screens (>=1024px) to avoid tablet overlap */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.rice.re" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 transition-colors border-r border-slate-200 pr-6 mr-2"
            >
              Bureau d'Études
              <ExternalLink size={14} />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Devis ou Démo
            </a>
          </div>

          {/* Mobile/Tablet Menu Button - visible up to 1024px (lg) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Side/Dropdown Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-800 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.rice.re"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-3 text-base font-medium text-sky-700 border-t border-slate-100"
            >
              Consulter le site du Bureau d'Études
              <ExternalLink size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="block w-full text-center mt-4 bg-slate-800 text-white px-3 py-3 rounded-md text-base font-semibold cursor-pointer"
            >
              Demander un devis ou une démo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;