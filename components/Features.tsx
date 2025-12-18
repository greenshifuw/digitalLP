import React from 'react';
import { FileCheck, Activity, Leaf, Recycle, Building, ClipboardCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-sky-600" />,
      title: "DUERP & Santé Sécurité",
      description: "Socle de votre démarche QHSE : mise à jour dynamique du Document Unique. Cotation des risques, fiches de pénibilité et suivi des AT/MP."
    },
    {
      icon: <Recycle className="w-6 h-6 text-sky-600" />,
      title: "Déchets & Travaux",
      description: "Volet environnemental (QSE) : centralisez vos BSD, suivez les tonnages et prestataires. Inclut la gestion spécifique des déchets issus de vos opérations de travaux pour une traçabilité complète."
    },
    {
      icon: <Leaf className="w-6 h-6 text-sky-600" />,
      title: "ISO 14001 & Management",
      description: "Pilotage de votre Système de Management de l'Environnement (SME). Suivi des KPI pour vos audits de certification ISO et dossiers ICPE."
    },
    {
      icon: <Building className="w-6 h-6 text-sky-600" />,
      title: "Conformité Technique & ERP",
      description: "Maîtrise des risques bâtimentaires. Planification des VGP et suivi des levées de réserves après passage de la commission de sécurité."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-sky-600" />,
      title: "Pilotage QSE Global",
      description: "Un plan d'action unique consolidant toutes vos sources (Audits, visites sécurité, contrôles réglementaires) avec relances automatiques."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-sky-600" />,
      title: "Habilitations & Compétences",
      description: "Suivez les CACES, SST et habilitations électriques. Recevez des alertes avant expiration pour garantir la sécurité QHSE sur site."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Une suite QHSE modulaire</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Activez les modules nécessaires à votre structure. De la simple gestion des risques professionnels au management QSE complet multi-sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-slate-100 bg-slate-50 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-4 group-hover:border-sky-200 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;