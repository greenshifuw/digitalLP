import React from 'react';
import { FileCheck, Activity, Leaf, Recycle, Building, ClipboardCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-sky-600" />,
      title: "DUERP & Santé Sécurité",
      description: "Mise à jour dynamique du Document Unique. Cotation des risques, fiches de pénibilité et suivi des accidents du travail en temps réel."
    },
    {
      icon: <Recycle className="w-6 h-6 text-sky-600" />,
      title: "Gestion des Déchets",
      description: "Centralisez vos BSD (Bordereaux de Suivi de Déchets). Suivez les tonnages, les prestataires agréés et validez votre conformité environnementale."
    },
    {
      icon: <Leaf className="w-6 h-6 text-sky-600" />,
      title: "ISO 14001 & Environnement",
      description: "Pilotage de vos analyses environnementales. Suivi des indicateurs de performance (KPI) pour vos audits de certification et dossiers ICPE."
    },
    {
      icon: <Building className="w-6 h-6 text-sky-600" />,
      title: "Conformité ERP",
      description: "Registre de sécurité dématérialisé. Planification des vérifications périodiques obligatoires et suivi des levées de réserves après passage de la commission."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-sky-600" />,
      title: "Plan d'Actions Global",
      description: "Un plan d'action unique consolidant toutes vos sources (Audit ISO, visite sécurité, contrôle réglementaire) avec attribution et relances."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-sky-600" />,
      title: "Gestion des Habilitations",
      description: "Suivez les CACES, SST, habilitations électriques de vos équipes technique et maintenance. Recevez des alertes avant expiration."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Une suite modulaire complète</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Activez les modules dont vous avez besoin. De la simple gestion des risques professionnels au management environnemental complet.
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