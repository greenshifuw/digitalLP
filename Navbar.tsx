import React from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

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
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-28 items-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://drive.google.com/thumbnail?id=1fuy_xQJH5LZGyoPu_0Hc7-pDsrnIPuF6&sz=w400" 
              alt="Logo R.I.C.E" 
              className="h-24 w-auto object-contain"
            />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-slate-900 tracking-tight leading-none text-5xl">R.I.C.E</span>
              <span className="text-xl uppercase tracking-wider text-slate-500 font-medium mt-1">Pilotage Réglementaire & QHSE</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
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
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Demander une démo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
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
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="block w-full text-center mt-4 bg-slate-800 text-white px-3 py-3 rounded-md text-base font-semibold cursor-pointer"
            >
              Demander une démo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;