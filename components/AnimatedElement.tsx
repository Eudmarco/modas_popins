
import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in';
  delay?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, animation = 'fade-in-up', delay = '0s' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(ref, '-100px');

  const animationClasses = {
    'fade-in-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
  };

  const visibleClasses = 'opacity-100 translate-y-0';

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${isOnScreen ? visibleClasses : animationClasses[animation]}`}
      style={{ transitionDelay: isOnScreen ? delay : '0s' }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
