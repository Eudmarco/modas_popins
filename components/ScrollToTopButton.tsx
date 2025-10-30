import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '../constants';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 left-6 z-50 bg-popins-dark text-white rounded-full p-3 shadow-lg transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Voltar ao topo"
            style={{ visibility: isVisible ? 'visible' : 'hidden' }}
        >
            <ArrowUpIcon className="w-6 h-6" strokeWidth={2} />
        </button>
    );
};

export default ScrollToTopButton;
