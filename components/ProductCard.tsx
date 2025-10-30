import React, { useState } from 'react';
import { type Product } from '../types';
import { WHATSAPP_NUMBER_FILIAL } from '../constants';
import { WhatsAppIcon } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappMessage = `Olá! Tenho interesse no produto ${product.name} (código: ${product.code}). Poderia me dar mais informações?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_FILIAL}?text=${encodeURIComponent(whatsappMessage)}`;
  
  const [magnifierStyle, setMagnifierStyle] = useState<React.CSSProperties>({ display: 'none' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const zoomLevel = 2;
    const lensSize = 200; // Diameter of the spotlight

    setMagnifierStyle({
      display: 'block',
      position: 'absolute',
      // Center the lens on the cursor
      left: `${x - lensSize / 2}px`,
      top: `${y - lensSize / 2}px`,
      width: `${lensSize}px`,
      height: `${lensSize}px`,
      pointerEvents: 'none',
      backgroundImage: `url(${product.imageUrl})`,
      backgroundRepeat: 'no-repeat',
      // Zoom the background image
      backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
      // Move the background image to show the area under the cursor
      backgroundPosition: `-${x * zoomLevel - lensSize / 2}px -${y * zoomLevel - lensSize / 2}px`,
      // Spotlight effect styling
      borderRadius: '50%',
      border: '3px solid #C91B49', // popins-red
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    });
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({ display: 'none' });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group flex flex-col h-full">
      <div 
        className="relative overflow-hidden cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-auto aspect-[3/4] object-cover"
        />
        <div style={magnifierStyle}></div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg text-popins-dark flex-grow">{product.name}</h3>
        <p className="text-sm text-popins-gray mb-4">Cód: {product.code}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-auto flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-2.5 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Pedir Informações
        </a>
      </div>
    </div>
  );
};

export default ProductCard;