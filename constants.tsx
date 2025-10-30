// FIX: Populate constants.tsx with required constants and icon components to resolve import errors across the application.
import React from 'react';
import { type Product } from './types';

export const PRODUCTS: Product[] = [
  { id: 1, rawFilename: 'produto-1.avif', name: 'Conjunto Blusa e Pantacourt', code: '2406 / 16861', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Blusa%20REF%202406%20Pantacur%20REF%2016861.avif' },
  { id: 2, rawFilename: 'produto-2.avif', name: 'Conjunto Blusa e Shorts', code: '2419 / 1853', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Blusa%20REF%202419%20Shorts%20REF%201853.avif' },
  { id: 3, rawFilename: 'produto-3.avif', name: 'Look Blusa e Pantacourt', code: '2450 / 2375', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Blusa%20REF%202450%20Pantacur%20REF%202375.avif' },
  { id: 4, rawFilename: 'produto-4.avif', name: 'Look Blusa e Bermuda', code: '2510 / 2337', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Blusa%20REF%202510%20Bermuda%20REF%202337.avif' },
  { id: 5, rawFilename: 'produto-5.avif', name: 'Conjunto Estampado', code: '2546 / 12271', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Blusa%20REF%202546%20Bermuda%20REF%2012271.avif' },
  { id: 6, rawFilename: 'produto-6.avif', name: 'Blusa com Bermuda', code: '2550 / 2345', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Blusa%20REF%202550%20Bermuda%20REF%202345.avif' },
  { id: 7, rawFilename: 'produto-7.avif', name: 'Blusa Floral com Bermuda', code: '2551 / 2337', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Blusa%20REF%202551%20Bermuda%20REF%202337.avif' },
  { id: 8, rawFilename: 'produto-8.avif', name: 'Conjunto Moderno', code: '2539 / 13731', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Blusa-REF-2539-Bermuda-REF-13731_1_.avif' },
  { id: 9, rawFilename: 'produto-9.avif', name: 'Look Casual Chic', code: '2546 / 12271', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Blusa-REF-2546-Bermuda-REF-12271.avif' },
  { id: 10, rawFilename: 'produto-10.avif', name: 'Macacão Estampado', code: '2547', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Macacao%20REF%202547.avif' },
  { id: 11, rawFilename: 'produto-11.avif', name: 'Vestido Floral', code: '2541', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Vestido%20REF%202541.avif' },
  { id: 12, rawFilename: 'produto-12.avif', name: 'Vestido Longo', code: '2552', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Vestido%20REF%202552.avif' },
  { id: 13, rawFilename: 'produto-13.avif', name: 'Vestido Estampado', code: '14362', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Vestido-REF-14362_1_.avif' },
  { id: 14, rawFilename: 'produto-14.avif', name: 'Vestido Elegante', code: '2552', imageUrl: 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/MPopins/Vestido-REF-2552_1_.avif' },
];

export const WHATSAPP_NUMBER_MATRIZ = '5511972469393';
export const WHATSAPP_NUMBER_FILIAL = '5511950539393';

export const LEGAL_CONTENT = {
  privacy: {
    title: 'Política de Privacidade',
    content: `A sua privacidade é importante para nós. É política do Modas PoPins respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Modas PoPins, e outros sites que possuímos e operamos.\nTrabalhamos com base na Lei de Proteção de Dados (13.709/2018), que traz garantias explícitas de proteção de dados pessoais, com direitos e deveres para controladores e operadores, no âmbito público e privado.`
  },
  terms: {
    title: 'Termos de Uso',
    content: `Estes termos e condições descrevem as regras e regulamentos para o uso do website da Modas PoPins.\nAo acessar este site, presumimos que você aceita estes termos e condições. Não continue a usar o Modas PoPins se não concordar com todos os termos e condições declarados nesta página.`
  },
  cookies: {
    title: 'Política de Cookies',
    content: `Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies.`
  },
  lgpd: {
    title: 'Conformidade LGPD',
    content: `A Modas PoPins está em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018. Estamos comprometidos em proteger os dados pessoais de nossos clientes e usuários, garantindo que eles sejam coletados, processados e armazenados de forma segura e transparente.`
  },
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/modaspopins',
  tiktok: 'https://tiktok.com/@modaspopins',
  facebook: 'https://facebook.com/modaspopins',
};

export const CONTACT_INFO = {
  addresses: {
    matriz: 'Rua Silva Teles, 243 - Pari, São Paulo - SP',
    filial: 'Rua Júlio Ribeiro, 235 - loja 1 - Brás, São Paulo - SP',
  },
  schedule: {
    matriz: 'Seg a Sex: 07h30 às 17h00',
    filial: 'Seg a Sex: 07h30 às 17h00\nSáb: 08h00 às 13h00',
  },
  phones: ['(11) 97246-9393', '(11) 95053-9393'],
  maps: {
      matriz: {
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.035311913988!2d-46.61337732474936!3d-23.53095096057375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58e4e7e61a6b%3A0x284f74e6f4a7f0e!2sR.%20Silva%20Teles%2C%20243%20-%20Pari%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003026-000!5e0!3m2!1spt-BR!2sbr!4v1716323133336!5m2!1spt-BR!2sbr',
          googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Silva+Teles,+243,+Pari,+S%C3%A3o+Paulo+-+SP',
          wazeUrl: 'https://waze.com/ul?q=Rua%20Silva%20Teles%2C%20243%2C%20Pari%2C%20S%C3%A3o%20Paulo%2C%20SP',
      },
      filial: {
          embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9427941783353!2d-46.61580222474921!3d-23.53401196068218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58e6530a6f7b%3A0x3b8a3e7a0e5b7c8d!2sR.%20J%C3%BAlio%20Ribeiro%2C%20235%20-%20Br%C3%A1s%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003010-030!5e0!3m2!1spt-BR!2sbr!4v1716323212871!5m2!1spt-BR!2sbr',
          googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+J%C3%BAlio+Ribeiro,+235+-+loja+1,+Br%C3%A1s,+S%C3%A3o+Paulo+-+SP',
          wazeUrl: 'https://waze.com/ul?q=Rua%20J%C3%BAlio%20Ribeiro%2C%20235%2C%20Br%C3%A1s%2C%20S%C3%A3o%20Paulo%2C%20SP',
      }
  }
};


export const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.512 1.924 6.344l-1.667 6.125 6.25-1.633z"/></svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
);

export const TikTokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.88-1.59-1.93-2.2-4.42-1.8-6.83.39-2.4 1.91-4.46 3.96-5.71.04-.02.1-.04.14-.06.21-.09.43-.16.66-.21.4-.09.83-.14 1.25-.14.28 0 .56.01.84.03.02-1.65.01-3.3-.02-4.95-.01-.79-.01-1.59.02-2.38.01-.31.02-.62.05-.93.03-.31.06-.62.09-.93.03-.31.09-.61.12-.92.03-.3.06-.6.09-.89.03-.29.06-.59.09-.88.03-.29.06-.58.09-.88.03-.28.06-.57.09-.85.03-.28.06-.56.09-.84.03-.28.06-.56.09-.84z"/></svg>
);

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
);

export const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M11.54 22.35a.75.75 0 01-1.08 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 011.06 0l6.25 6.25a.75.75 0 010 1.06l-6.25 6.25zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
        <path d="M11.99 2.003c4.418 0 8 3.582 8 8.001 0 4.418-3.582 7.999-8 7.999s-8-3.581-8-7.999c0-4.419 3.582-8.001 8-8.001zM12 4.003a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
);

export const WazeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.01,2.011c-4.32,0-7.85,3.48-7.85,7.76c0,2.69,1.4,5.05,3.52,6.47c0.07-0.01,0.13-0.02,0.2-0.02c0.23,0,0.46,0.04,0.67,0.11 c0.29,0.1,0.57,0.25,0.83,0.44c0.05,0.04,0.1,0.08,0.15,0.12c0.01,0,0.01,0,0.02,0.01c0.82,0.57,1.8,0.92,2.87,0.92 c1.7,0,3.23-0.71,4.28-1.85c1.05-1.14,1.72-2.65,1.72-4.33C19.86,5.491,16.33,2.011,12.01,2.011z M14.15,7.441 c-0.08-0.62-0.65-1.04-1.28-0.95c-0.63,0.08-1.04,0.65-0.95,1.28c0.08,0.62,0.65,1.04,1.28,0.95C13.82,8.641,14.23,8.071,14.15,7.441z M8.16,7.441c-0.08-0.62-0.65-1.04-1.28-0.95c-0.63,0.08-1.04,0.65-0.95,1.28c0.08,0.62,0.65,1.04,1.28,0.95 C7.83,8.641,8.24,8.071,8.16,7.441z M12.01,13.891c-1.83,0-3.41-0.96-4.22-2.39c-0.19-0.33,0.04-0.76,0.43-0.76h7.57 c0.39,0,0.62,0.43,0.43,0.76C15.42,12.931,13.84,13.891,12.01,13.891z M18.17,17.431c-0.42,0.43-0.91,0.78-1.44,1.05 c-1.01,0.5-2.21,0.78-3.47,0.78c-0.53,0-1.04-0.08-1.53-0.23c-1.2-0.37-2.22-1.1-2.91-2.07c-0.02-0.03-0.04-0.06-0.06-0.09 c-0.04-0.05-0.08-0.1-0.11-0.16c-0.01-0.01-0.01-0.02-0.02-0.03c-0.03-0.04-0.05-0.08-0.08-0.12l-0.05-0.09 c-0.02-0.03-0.04-0.06-0.05-0.09c0,0-0.01-0.01-0.01-0.02c-0.04-0.06-0.07-0.13-0.1-0.19c-0.01-0.02-0.02-0.04-0.03-0.06 c-0.2-0.4-0.31-0.85-0.31-1.33c0-0.01,0-0.02,0-0.04c-0.02-0.2,0-0.39,0.04-0.59c-0.73,1.3-1.02,2.83-0.75,4.32 c0.32,1.79,1.6,3.29,3.31,3.99c1.71,0.7,3.69,0.61,5.3-0.28c1.61-0.89,2.77-2.58,3.01-4.45c0.03-0.22,0.05-0.45,0.05-0.67 c0-0.55-0.11-1.08-0.32-1.57c-0.15-0.35-0.34-0.68-0.58-0.99c-0.04-0.05-0.08-0.1-0.13-0.15c-0.18-0.2-0.37-0.38-0.58-0.55 C20.35,14.611,18.17,17.431,18.17,17.431z"/>
    </svg>
);
