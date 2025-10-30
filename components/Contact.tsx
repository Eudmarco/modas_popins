import React from 'react';
import { CONTACT_INFO, MapPinIcon, WazeIcon } from '../constants';
import AnimatedElement from './AnimatedElement';

const Contact: React.FC = () => {
  const stores = [
    {
      name: 'Loja Matriz (Pari)',
      address: CONTACT_INFO.addresses.matriz,
      mapInfo: CONTACT_INFO.maps.matriz,
    },
    {
      name: 'Loja Filial (Brás)',
      address: CONTACT_INFO.addresses.filial,
      mapInfo: CONTACT_INFO.maps.filial,
    },
  ];

  return (
    <section id="location" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedElement>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-popins-dark mb-10" style={{fontFamily: "'Playfair Display', serif"}}>
            Nossas Lojas
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stores.map((store, index) => (
            <AnimatedElement key={store.name} delay={`${index * 100}ms`}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full flex flex-col">
                <h3 className="text-2xl font-bold text-popins-red mb-3">{store.name}</h3>
                <p className="text-popins-gray mb-4">{store.address}</p>
                <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mb-4 border border-gray-200">
                  <iframe
                    src={store.mapInfo.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa da ${store.name}`}
                  ></iframe>
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <a 
                    href={store.mapInfo.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-500 text-white font-bold py-2.5 px-4 rounded-md hover:bg-blue-600 transition-colors text-center"
                    aria-label={`Abrir endereço da ${store.name} no Google Maps`}
                  >
                    <MapPinIcon className="w-5 h-5" />
                    Google Maps
                  </a>
                  <a 
                    href={store.mapInfo.wazeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-cyan-500 text-white font-bold py-2.5 px-4 rounded-md hover:bg-cyan-600 transition-colors text-center"
                    aria-label={`Abrir endereço da ${store.name} no Waze`}
                  >
                    <WazeIcon className="w-5 h-5" />
                    Waze
                  </a>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
