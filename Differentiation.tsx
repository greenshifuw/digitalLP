import React from 'react';
import { Check, X } from 'lucide-react';

const Differentiation: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir R.I.C.E ?</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Le marché regorge de logiciels SaaS vides. Nous ne vous vendons pas une coquille vide, mais une expertise métier structurée.
            </p>
            <p className="text-slate-300 mb-8">
              Notre outil est issu de nos missions terrain. Il est pragmatique, direct et conçu pour protéger l'employeur tout en protégeant les salariés.
            </p>
            <div className="border-l-4 border-sky-500 pl-4 py-2">
              <p className="font-medium text-sky-400">
                "L'outil ne vaut que par ce qu'on en fait. Nous vous donnons les moyens de bien faire."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl text-slate-800">
              <div className="grid grid-cols-2 bg-slate-100 font-bold text-sm border-b border-slate-200">
                <div className="p-4 text-center text-slate-500 uppercase tracking-wide">Logiciels SaaS Génériques</div>
                <div className="p-4 text-center bg-slate-800 text-white uppercase tracking-wide">Solution R.I.C.E</div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-2 border-b border-slate-100 hover:bg-slate-50">
                <div className="p-4 flex items-center gap-3 text-sm">
                  <X className="text-red-500 w-5 h-5 flex-shrink-0" />
                  <span>Outil vide à configurer seul</span>
                </div>
                <div className="p-4 flex items-center gap-3 text-sm bg-sky-50/50 font-medium">
                  <Check className="text-sky-600 w-5 h-5 flex-shrink-0" />
                  <span>Pré-paramétré par des experts</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 border-b border-slate-100 hover:bg-slate-50">
                <div className="p-4 flex items-center gap-3 text-sm">
                  <X className="text-red-500 w-5 h-5 flex-shrink-0" />
                  <span>Support technique (chatbot)</span>
                </div>
                <div className="p-4 flex items-center gap-3 text-sm bg-sky-50/50 font-medium">
                  <Check className="text-sky-600 w-5 h-5 flex-shrink-0" />
                  <span>Support métier par ingénieurs QHSE</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 border-b border-slate-100 hover:bg-slate-50">
                <div className="p-4 flex items-center gap-3 text-sm">
                  <X className="text-red-500 w-5 h-5 flex-shrink-0" />
                  <span>Vision purement administrative</span>
                </div>
                <div className="p-4 flex items-center gap-3 text-sm bg-sky-50/50 font-medium">
                  <Check className="text-sky-600 w-5 h-5 flex-shrink-0" />
                  <span>Approche terrain & prévention réelle</span>
                </div>
              </div>

               {/* Row 4 */}
               <div className="grid grid-cols-2 hover:bg-slate-50">
                <div className="p-4 flex items-center gap-3 text-sm">
                  <X className="text-red-500 w-5 h-5 flex-shrink-0" />
                  <span>Abonnement complexe avec options cachées</span>
                </div>
                <div className="p-4 flex items-center gap-3 text-sm bg-sky-50/50 font-medium">
                  <Check className="text-sky-600 w-5 h-5 flex-shrink-0" />
                  <span>Offre claire : Abonnement tout inclus</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Differentiation;