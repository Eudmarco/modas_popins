import React from 'react';
import { WhatsAppIcon, WHATSAPP_NUMBER_MATRIZ } from '../constants';

const FloatingWhatsAppButton: React.FC = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_MATRIZ}?text=${encodeURIComponent('Olá! Visitei o site e gostaria de mais informações.')}`;

    return (
        <>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center animate-pulse-whatsapp"
                aria-label="Fale conosco no WhatsApp"
            >
                <WhatsAppIcon className="w-8 h-8" />
            </a>
            <style>{`
                @keyframes pulse-whatsapp {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
                    }
                    50% {
                        transform: scale(1.1);
                        box-shadow: 0 0 0 12px rgba(34, 197, 94, 0);
                    }
                }
                .animate-pulse-whatsapp {
                    animation: pulse-whatsapp 2s infinite;
                }
            `}</style>
        </>
    );
};

export default FloatingWhatsAppButton;
