import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import CookieConsentBanner from './components/CookieConsentBanner';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import ScrollToTopButton from './components/ScrollToTopButton';
import { type Product } from './types';
import { PRODUCTS, WHATSAPP_NUMBER_MATRIZ, LEGAL_CONTENT } from './constants';
import { WhatsAppIcon } from './constants';

type LegalTopic = 'privacy' | 'terms' | 'cookies' | 'lgpd';

const App: React.FC = () => {
  const [isEntryPopupOpen, setEntryPopupOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalTopic | null>(null);
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);
  const [shuffledProducts, setShuffledProducts] = useState<Product[]>([]);
  
  const resellerWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER_MATRIZ}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre como me tornar um(a) revendedor(a) Modas PoPins.')}`;

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
        setCookieConsent('pending');
    } else {
        setCookieConsent(consent);
    }

    const timer = setTimeout(() => {
      // Don't show popup if a modal is already open
      if (!activeLegalModal) {
        setEntryPopupOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeLegalModal]);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm to randomize products on page load
    const shuffleArray = (array: Product[]) => {
      let currentIndex = array.length,  randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }
      return array;
    }
    // Create a copy before shuffling to not mutate the original constant
    setShuffledProducts(shuffleArray([...PRODUCTS]));
  }, []); // Empty dependency array ensures this runs only once on mount
  
  const handleLegalLinkClick = (topic: LegalTopic) => {
    setActiveLegalModal(topic);
  }

  const handleCookieConsent = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie_consent', choice);
    setCookieConsent(choice);
  };


  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header resellerUrl={resellerWhatsAppUrl} />
      <main className="flex-grow">
        <Hero resellerUrl={resellerWhatsAppUrl} />
        <ProductGallery products={shuffledProducts} />
        <Contact />
      </main>
      <Footer onLegalLinkClick={handleLegalLinkClick} />

      {/* Entry Popup Modal */}
      <Modal isOpen={isEntryPopupOpen} onClose={() => setEntryPopupOpen(false)}>
        <div className="text-center p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-popins-dark mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Torne-se uma Revendedora!</h2>
          <p className="text-popins-gray mb-6">Faça parte do nosso time de sucesso e leve a moda PoPins para mais mulheres. Condições especiais para revendedoras!</p>
          <a
            href={resellerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-popins-red text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Quero ser Revendedora
          </a>
        </div>
      </Modal>

      {/* Legal Modals */}
      <Modal isOpen={!!activeLegalModal} onClose={() => setActiveLegalModal(null)}>
          {activeLegalModal && (
              <div className="p-6 text-left max-h-[80vh] overflow-y-auto">
                  <h2 className="text-2xl font-bold text-popins-dark mb-4">{LEGAL_CONTENT[activeLegalModal].title}</h2>
                  <div className="prose text-popins-gray">
                      {LEGAL_CONTENT[activeLegalModal].content.split('\n').map((p, i) => <p key={i}>{p}</p>)}
                  </div>
              </div>
          )}
      </Modal>
      
      <FloatingWhatsAppButton />
      <ScrollToTopButton />

      {cookieConsent === 'pending' && (
          <CookieConsentBanner
              onAccept={() => handleCookieConsent('accepted')}
              onReject={() => handleCookieConsent('rejected')}
              onPolicyClick={() => handleLegalLinkClick('cookies')}
          />
      )}

    </div>
  );
};

export default App;