import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Features from './components/Features';
import Offers from './components/Offers';
import Differentiation from './components/Differentiation';
import LegalContext from './components/LegalContext';
import Credibility from './components/Credibility';
import ContactFooter from './components/ContactFooter';
import { MentionsLegalesModal, PrivacyPolicyModal } from './components/LegalModals';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-sky-200 selection:text-sky-900">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="flex flex-col">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <Features />
        <Differentiation />
        <Offers />
        <LegalContext />
        <Credibility />
        <ContactFooter />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-10 text-center text-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <p>© {new Date().getFullYear()} R.I.C.E - Bureau d'études Environnement & QHSE. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a 
              href="https://www.rice.re" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2 decoration-slate-700 hover:decoration-white"
            >
              Le Bureau d'Études
            </a>
            <button 
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-white transition-colors underline underline-offset-2 decoration-slate-700 hover:decoration-white"
            >
              Mentions légales
            </button>
            <button 
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-white transition-colors underline underline-offset-2 decoration-slate-700 hover:decoration-white"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </footer>

      <MentionsLegalesModal isOpen={legalModalOpen} onClose={() => setLegalModalOpen(false)} />
      <PrivacyPolicyModal isOpen={privacyModalOpen} onClose={() => setPrivacyModalOpen(false)} />
    </div>
  );
}