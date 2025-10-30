import React from 'react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';
import { InstagramIcon, TikTokIcon, FacebookIcon } from '../constants';

type LegalTopic = 'privacy' | 'terms' | 'cookies' | 'lgpd';

interface FooterProps {
  onLegalLinkClick: (topic: LegalTopic) => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalLinkClick }) => {
  const legalLinks: { topic: LegalTopic, label: string }[] = [
    { topic: 'privacy', label: 'Política de Privacidade' },
    { topic: 'terms', label: 'Termos de Uso' },
    { topic: 'cookies', label: 'Política de Cookies' },
    { topic: 'lgpd', label: 'Conformidade LGPD' },
  ];

  return (
    <footer id="contact" className="bg-popins-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Column 1: Brand & Social */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-2xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>Modas PoPins</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Matriz */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-popins-red">Loja Matriz (Pari)</h4>
            <p className="text-gray-300 leading-relaxed">{CONTACT_INFO.addresses.matriz}</p>
            <p className="text-gray-300 leading-relaxed mt-2">
              <strong>Horário:</strong><br/>{CONTACT_INFO.schedule.matriz}
            </p>
          </div>

          {/* Column 3: Filial */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-popins-red">Loja Filial (Brás)</h4>
            <p className="text-gray-300 leading-relaxed">{CONTACT_INFO.addresses.filial}</p>
            <p className="text-gray-300 leading-relaxed mt-2">
              <strong>Horário:</strong><br/>{CONTACT_INFO.schedule.filial}
            </p>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-popins-red">Contato</h4>
            <p className="text-gray-300 leading-relaxed">
              <strong>Telefones:</strong><br/>{CONTACT_INFO.phones.join(' / ')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">© {new Date().getFullYear()} Modas PoPins. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {legalLinks.map(link => (
              <button key={link.topic} onClick={() => onLegalLinkClick(link.topic)} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;