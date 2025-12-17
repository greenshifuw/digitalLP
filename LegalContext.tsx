import React from 'react';
import { Scale } from 'lucide-react';

const LegalContext: React.FC = () => {
  return (
    <section className="bg-slate-100 py-16 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-slate-200 rounded-full mb-6">
          <Scale className="w-6 h-6 text-slate-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Le Cadre Juridique</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Selon l'<strong>Article L. 4121-1 du Code du travail</strong>, l'employeur doit prendre les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs.
        </p>
        <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500 text-left shadow-sm">
          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-2">Important - Responsabilité</h4>
          <p className="text-sm text-slate-600">
            L'acquisition d'un logiciel QHSE, aussi performant soit-il, n'exonère pas l'employeur de ses responsabilités pénales et civiles. L'outil est un moyen de preuve et de pilotage, non une délégation de responsabilité. Il vous permet de matérialiser votre obligation de moyens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalContext;