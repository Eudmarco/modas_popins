import React from 'react';

interface CookieConsentBannerProps {
  onAccept: () => void;
  onReject: () => void;
  onPolicyClick: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onAccept, onReject, onPolicyClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-popins-dark text-white p-4 z-50 animate-slide-up">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com a nossa{' '}
          <button onClick={onPolicyClick} className="underline hover:text-gray-300">
            Política de Cookies
          </button>
          .
        </p>
        <div className="flex-shrink-0 flex gap-3">
          <button
            onClick={onReject}
            className="bg-gray-600 text-white font-semibold py-2 px-5 rounded-md hover:bg-gray-700 transition-colors text-sm"
          >
            Rejeitar
          </button>
          <button
            onClick={onAccept}
            className="bg-popins-red text-white font-semibold py-2 px-5 rounded-md hover:bg-opacity-90 transition-colors text-sm"
          >
            Aceitar
          </button>
        </div>
      </div>
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CookieConsentBanner;
