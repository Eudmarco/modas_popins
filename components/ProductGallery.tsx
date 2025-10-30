
import React, { useState } from 'react';
import { type Product } from '../types';
import ProductCard from './ProductCard';
import AnimatedElement from './AnimatedElement';

interface ProductGalleryProps {
  products: Product[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    // Smoothly scroll to the top of the gallery section for better UX
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-popins-red focus:ring-opacity-50 ${
            currentPage === i
              ? 'bg-popins-red text-white shadow'
              : 'bg-white text-popins-dark hover:bg-gray-100'
          }`}
          aria-current={currentPage === i ? 'page' : undefined}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <section id="catalogo" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedElement>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-popins-dark mb-10" style={{fontFamily: "'Playfair Display', serif"}}>
            Nosso Catálogo
            </h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product, index) => (
            <AnimatedElement key={product.id} delay={`${index * 100}ms`}>
                <ProductCard
                product={product}
                />
            </AnimatedElement>
          ))}
        </div>
        
        {totalPages > 1 && (
          <nav aria-label="Paginação da galeria" className="flex justify-center items-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-white text-popins-dark hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
            >
              Anterior
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-white text-popins-dark hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
            >
              Próximo
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;