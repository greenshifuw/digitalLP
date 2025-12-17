import React from 'react';
import { AlertTriangle, FileWarning, Gavel, Timer } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <FileWarning className="w-8 h-8 text-amber-500" />,
      title: "Dispersion documentaire",
      description: "DUERP dans un classeur, BSD (Déchets) dans des mails, registres ERP papier... L'information critique est éparpillée et difficile à produire en cas de contrôle."
    },
    {
      icon: <Gavel className="w-8 h-8 text-amber-500" />,
      title: "Risque Pénal & Administratif",
      description: "Non-respect des périodicités de contrôle (VGP, visites commissions de sécurité), défaut de traçabilité des déchets dangereux : votre responsabilité est engagée."
    },
    {
      icon: <Timer className="w-8 h-8 text-amber-500" />,
      title: "Gestion ISO Chronophage",
      description: "Maintenir une certification ISO 14001 ou 45001 demande un suivi d'indicateurs constant. Sans outil dédié, le tableau Excel devient ingérable."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-amber-500" />,
      title: "Complexité Réglementaire",
      description: "Code du travail, Code de l'environnement, Réglementation ERP... Comment s'assurer d'être à jour sur tous les fronts simultanément ?"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            La conformité ne s'arrête pas au Document Unique.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Dirigeants d'ERP ou d'ICPE, vos obligations sont multiples. <br/>
            L'absence de vision consolidée entre sécurité, environnement et technique vous expose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:border-sky-200 transition-colors duration-300">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;