import React from 'react';
import { Laptop, CheckCircle } from 'lucide-react';

const Offers: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Une offre simple et complète</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Accédez à toute la puissance de notre expertise via notre tableau de bord.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Card Unique: Autonomie */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col md:flex-row relative group hover:border-sky-300 transition-colors">
            <div className="p-10 flex-1 md:w-2/3">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-sky-100 rounded-lg flex items-center justify-center text-sky-700">
                  <Laptop size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Offre Autonomie</h3>
                  <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Le tableau de bord SaaS</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                Idéal pour les structures qui souhaitent structurer leur démarche interne avec un outil professionnel. Vous gardez la main sur votre QHSE, nous vous fournissons la structure, la méthode et la veille.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Accès complet à la plateforme</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Mises à jour réglementaires incluses</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Support technique par email</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Hébergement sécurisé des données</span>
                </div>
                 <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Modèles de documents validés</span>
                </div>
                 <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">Alertes échéances automatiques</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 md:w-1/3 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
              <p className="text-slate-600 text-sm mb-6 text-center">
                Démarrez dès maintenant avec une solution éprouvée.
              </p>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="block w-full text-center px-6 py-4 bg-slate-800 text-white rounded-md font-bold hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
              >
                Demander une démo
              </a>
              <p className="mt-4 text-xs text-slate-400 text-center">
                Sans engagement. Mise en place rapide.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;