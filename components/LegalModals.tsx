import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-fade-in-up">
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 transition-colors p-1 rounded-full hover:bg-slate-100"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto text-sm text-slate-600 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export const MentionsLegalesModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Mentions Légales">
      <div className="space-y-6">
        <section>
          <h4 className="font-bold text-slate-800 text-base mb-2">1. Éditeur du site</h4>
          <p>
            Le présent site est la propriété de l'entreprise individuelle <strong>R.I.C.E</strong>.<br />
            <strong>Siège social :</strong> 5 impasse Ambroise, 97430 Le TAMPON, La Réunion.<br />
            <strong>Forme juridique :</strong> Entreprise Individuelle.<br />
            <strong>Email :</strong> contact@rice.re<br />
            <strong>Téléphone :</strong> +262 692 656166
          </p>
        </section>

        <section>
          <h4 className="font-bold text-slate-800 text-base mb-2">2. Directeur de la publication</h4>
          <p>L'équipe R.I.C.E</p>
        </section>

        <section>
          <h4 className="font-bold text-slate-800 text-base mb-2">3. Hébergement</h4>
          <p>
            Ce site est une application web hébergée sur une infrastructure Cloud sécurisée (Google Cloud / Vercel / Netlify selon déploiement).
          </p>
        </section>

        <section>
          <h4 className="font-bold text-slate-800 text-base mb-2">4. Propriété intellectuelle</h4>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
        </section>
      </div>
    </Modal>
  );
};

export const PrivacyPolicyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Politique de Confidentialité">
      <div className="space-y-6">
        <section>
          <h4 className="font-bold text-slate-800 text-base mb-2">1. Collecte des données</h4>
          <p>
            Dans le cadre de l'utilisation du formulaire de contact présent sur ce site, nous sommes amenés à collecter les données suivantes :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Nom complet</li>
            <li>Nom de l'entité (société)</li>
            <li>Adresse email professionnelle</li>
            <li>Type de structure</li>
          </ul>
        </section>

        <section>
          <h4 className="font-bold text-slate-800 text-base mb-2">2. Finalité des données</h4>
          <p>
            Les informations recueillies font l’objet d’un traitement informatique destiné exclusivement à <strong>R.I.C.E</strong> pour les finalités suivantes :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Répondre aux demandes de démonstration du logiciel.</li>
            <li>Échanges techniques et commerciaux suite à la demande de l'utilisateur.</li>
          </ul>
          <p className="mt-2">
            Ces données ne sont en aucun cas vendues, échangées ou transférées à des tiers.
          </p>
        </section>

        <section>
          <h4 className="font-bold text-slate-800 text-base mb-2">3. Durée de conservation</h4>
          <p>
            Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact émanant de l'utilisateur, conformément aux recommandations de la CNIL.
          </p>
        </section>

        <section>
          <h4 className="font-bold text-slate-800 text-base mb-2">4. Droits des utilisateurs</h4>
          <p>
            Conformément à la loi « informatique et libertés » et au RGPD, vous bénéficiez d’un droit d’accès, de rectification, de portabilité et d’effacement de vos données ou encore de limitation du traitement.
          </p>
          <p className="mt-2">
            Vous pouvez exercer ces droits en vous adressant à :<br/>
            <strong>R.I.C.E - 5 impasse Ambroise 97430 Le TAMPON</strong><br/>
            ou par mail à : <strong>contact@rice.re</strong>
          </p>
        </section>
      </div>
    </Modal>
  );
};