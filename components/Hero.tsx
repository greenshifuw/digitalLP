import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-slate-900 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-sky-200 text-[10px] md:text-xs font-medium tracking-wide mb-6 md:mb-8 uppercase">
            <Layers size={14} />
            <span>QHSE · Environnement (ISO) · Déchets · ERP</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight mb-6 md:mb-8 leading-tight">
            Pilotez votre conformité globale <br className="hidden lg:block" />
            <span className="text-sky-300">du DUERP à la gestion des déchets.</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-light mb-8 md:mb-10 leading-relaxed">
            Une plateforme unique pour centraliser vos obligations : Santé-Sécurité, certifications ISO 14001, traçabilité des déchets et registres de sécurité ERP.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-sm text-slate-900 bg-white hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Demander un devis ou une démo
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleScroll(e, '#features')}
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
            >
              Voir les modules
            </a>
          </div>

          <p className="mt-8 text-xs md:text-sm text-sky-400/80 font-medium">
            Conçu pour Industriels, Bailleurs Sociaux, Collectivités et ERP.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;