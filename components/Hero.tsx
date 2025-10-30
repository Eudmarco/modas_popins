import React from 'react';
import AnimatedElement from './AnimatedElement';

interface HeroProps {
  resellerUrl: string;
}

const Hero: React.FC<HeroProps> = ({ resellerUrl }) => {
  return (
    <section className="relative bg-white text-center py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover" style={{backgroundImage: "url('https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/mulheres%20capa.avif')", backgroundPosition: 'center 20%'}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent to-[35%]"></div>
        <div className="container mx-auto px-6 relative z-10">
            <AnimatedElement animation="fade-in-up" delay="2200ms">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{fontFamily: "'Playfair Display', serif", textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
                Elegância em Cada Curva.
                </h2>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay="2400ms">
                <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>
                Celebre sua beleza com a moda plus size que une conforto, estilo e as últimas tendências. Feita para a mulher moderna e confiante.
                </p>
            </AnimatedElement>
            <AnimatedElement animation="fade-in-up" delay="2600ms">
                <a
                href={resellerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-popins-red text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg"
                >
                Quero Revender Agora
                </a>
            </AnimatedElement>
        </div>
    </section>
  );
};

export default Hero;