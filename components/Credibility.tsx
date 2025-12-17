import React from 'react';
import { MapPin, Award, BookOpen } from 'lucide-react';

const Credibility: React.FC = () => {
  return (
    <section id="credibility" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">R.I.C.E : L'expertise technique avant tout</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Nous sommes un bureau d'études spécialisé en Environnement et QHSE. Notre légitimité ne vient pas du code informatique, mais du terrain.
            </p>
            <p className="text-slate-600 mb-8">
              Nous accompagnons industriels, collectivités et PME dans la gestion de leurs ICPE (Installations Classées) et de leur sécurité au travail depuis des années. Ce logiciel est né de notre propre besoin de rigueur.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-sky-700 mr-2 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Adaptation DROM</h4>
                  <p className="text-xs text-slate-500">Expertise spécifique aux contextes ultra-marins et insulaires.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-5 h-5 text-sky-700 mr-2 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Ingénieurs Qualifiés</h4>
                  <p className="text-xs text-slate-500">Equipe diplômée et expérimentée en risques industriels.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-sky-950 p-8 rounded-xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <BookOpen className="w-10 h-10 text-sky-400 mb-6" />
                <blockquote className="text-xl font-medium italic mb-6">
                  "La sécurité n'est pas une question de chance, mais de méthode. Nous avons conçu cet outil pour que la méthode soit accessible à tous les dirigeants, pas seulement aux grands groupes."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-sky-800 rounded-full flex items-center justify-center font-bold text-sky-200 text-xs">
                    R.I.C.E
                  </div>
                  <div className="ml-3">
                    <p className="font-bold">L'équipe R.I.C.E</p>
                    <p className="text-sky-400 text-sm">Bureau d'études</p>
                  </div>
                </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-sky-800/50 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;