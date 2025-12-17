import React, { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const ContactFooter: React.FC = () => {
  const [name, setName] = useState('');
  const [entityName, setEntityName] = useState('');
  const [email, setEmail] = useState('');
  const [structureType, setStructureType] = useState('PME / PMI');
  const [selectedModule, setSelectedModule] = useState('Suite Complète (QHSE + Env + ERP)');

  const handleContactClick = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construction du sujet et du corps de l'email
    const subject = `Demande de démonstration R.I.C.E - ${entityName || structureType}`;
    const body = `Bonjour,

Je souhaite solliciter une démonstration de votre outil de pilotage.

Voici mes informations :
- Nom : ${name}
- Entité / Société : ${entityName}
- Type de structure : ${structureType}
- Module d'intérêt principal : ${selectedModule}
- Email professionnel : ${email}

Merci de me recontacter pour convenir d'un rendez-vous.

Cordialement,`;

    // Création du lien mailto
    const mailtoLink = `mailto:contact@rice.re?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Ouverture du client mail
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Passez de l'inquiétude à la sérénité</h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Discutons de vos enjeux QHSE. Un petit échange technique pour évaluer la pertinence de l'outil pour votre structure.
        </p>

        <div className="bg-white rounded-lg p-8 shadow-2xl max-w-lg mx-auto">
          <form className="space-y-4 text-left" onSubmit={handleContactClick}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-900"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label htmlFor="entity" className="block text-sm font-medium text-slate-700 mb-1">Nom de l'entité</label>
                <input 
                  type="text" 
                  id="entity" 
                  required
                  value={entityName}
                  onChange={(e) => setEntityName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-900"
                  placeholder="Société SAS"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email professionnel</label>
              <input 
                type="email" 
                id="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-900"
                placeholder="direction@entreprise.com"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">Type de structure</label>
                <select 
                  id="type" 
                  value={structureType}
                  onChange={(e) => setStructureType(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-900 bg-white"
                >
                  <option>PME / PMI</option>
                  <option>Industrie (ICPE)</option>
                  <option>Collectivité</option>
                  <option>Bailleur Social</option>
                  <option>Etablissement de Santé</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="module" className="block text-sm font-medium text-slate-700 mb-1">Module d'intérêt</label>
                <select 
                  id="module" 
                  value={selectedModule}
                  onChange={(e) => setSelectedModule(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none text-slate-900 bg-white"
                >
                  <option>Suite Complète (QHSE + Env + ERP)</option>
                  <option>DUERP & Santé Sécurité</option>
                  <option>Gestion des Déchets (BSD)</option>
                  <option>ISO 14001 & Environnement</option>
                  <option>Conformité ERP & Incendie</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-md transition-all flex items-center justify-center group mt-2">
              Demander une démonstration
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-400 text-center">
            En cliquant, votre client mail s'ouvrira avec une demande pré-remplie.
          </p>
        </div>

        <div className="mt-12 flex justify-center space-x-8 text-sky-200">
          <a href="mailto:contact@rice.re" className="flex items-center hover:text-white transition-colors">
            <Mail className="w-5 h-5 mr-2" />
            <span>contact@rice.re</span>
          </a>
          <a href="tel:+262692656166" className="flex items-center hover:text-white transition-colors">
            <Phone className="w-5 h-5 mr-2" />
            <span>+262 692 656166</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;