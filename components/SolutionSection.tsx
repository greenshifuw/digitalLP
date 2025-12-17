import React from 'react';
import { LayoutDashboard, Database, BellRing, Recycle, Leaf, Building } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-800 font-semibold text-xs rounded-full uppercase tracking-wide mb-6">
              L'Écosystème R.I.C.E
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Un pilotage transversal <br/>
              <span className="text-sky-700">Sécurité, Environnement & Technique.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ne cloisonnez plus vos données. Notre tableau de bord croise les informations pour une gestion plus fine : un déchet dangereux est à la fois un risque environnemental et un risque pour la sécurité du salarié.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <LayoutDashboard className="w-6 h-6 text-sky-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Tableau de bord Multi-Sites</h4>
                  <p className="text-slate-600 text-sm">Supervisez l'ensemble de vos établissements (ERP, Ateliers, Bureaux) sur une seule interface.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Database className="w-6 h-6 text-sky-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Registre Unique Dématérialisé</h4>
                  <p className="text-slate-600 text-sm">Centralisez DUERP, Registre de Sécurité Incendie, BSD et rapports de vérification.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <BellRing className="w-6 h-6 text-sky-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Veille & Échéancier</h4>
                  <p className="text-slate-600 text-sm">Alertes sur les VGP, renouvellements ISO, déclarations déchets et formations.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Abstract Dashboard Visualization - Pure CSS/HTML */}
          <div className="relative">
            <div className="absolute inset-0 bg-sky-200 transform translate-x-4 translate-y-4 rounded-xl"></div>
            <div className="relative bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
              {/* Fake Browser Header */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="ml-4 h-4 bg-white border border-slate-200 rounded w-64"></div>
              </div>
              
              {/* Fake App Interface */}
              <div className="flex h-96">
                {/* Sidebar */}
                <div className="w-16 md:w-48 bg-slate-800 border-r border-slate-200 p-4 hidden sm:block">
                  <div className="space-y-3">
                    <div className="h-2 w-20 bg-slate-600 rounded mb-6"></div>
                    <div className="h-8 w-full bg-sky-900/50 rounded flex items-center px-2"><div className="w-4 h-4 bg-sky-400 rounded-sm"></div></div>
                    <div className="h-8 w-full rounded flex items-center px-2 opacity-50"><div className="w-4 h-4 bg-slate-600 rounded-sm"></div></div>
                    <div className="h-8 w-full rounded flex items-center px-2 opacity-50"><div className="w-4 h-4 bg-slate-600 rounded-sm"></div></div>
                    <div className="h-8 w-full rounded flex items-center px-2 opacity-50"><div className="w-4 h-4 bg-slate-600 rounded-sm"></div></div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 bg-slate-50 overflow-hidden">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-6 w-48 bg-slate-200 rounded"></div>
                    <div className="h-8 w-24 bg-sky-600 rounded shadow-sm"></div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 h-24 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 opacity-10"><Recycle size={40} /></div>
                      <div className="w-8 h-8 rounded bg-sky-100 mb-2"></div>
                      <div className="h-2 w-16 bg-slate-200 rounded"></div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 h-24 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-2 opacity-10"><Leaf size={40} /></div>
                       <div className="w-8 h-8 rounded bg-emerald-100 mb-2"></div>
                       <div className="h-2 w-16 bg-slate-200 rounded"></div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 h-24 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-2 opacity-10"><Building size={40} /></div>
                       <div className="w-8 h-8 rounded bg-amber-100 mb-2"></div>
                       <div className="h-2 w-16 bg-slate-200 rounded"></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-slate-100 h-48 p-4">
                    <div className="h-4 w-32 bg-slate-200 rounded mb-4"></div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                         <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                         <div className="h-2 flex-1 bg-slate-100 rounded"></div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                         <div className="h-2 flex-1 bg-slate-100 rounded"></div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-2 h-2 rounded-full bg-red-500"></div>
                         <div className="h-2 flex-1 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400 italic">Vision consolidée (Mockup)</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;