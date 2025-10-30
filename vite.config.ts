import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Define o diretório raiz do projeto para a resolução de alias
const projectRootDir = path.resolve(__dirname);

export default defineConfig(({ mode }) => {
    // Carrega variáveis de ambiente (necessário para API Keys, etc.)
    const env = loadEnv(mode, projectRootDir, '');
    
    return {
      // *** CONFIGURAÇÃO CRÍTICA PARA DEPLOY EM DOMÍNIO PERSONALIZADO ***
      // Define a URL base para os assets, que deve ser a raiz ('/') para 
      // um domínio como modaspopins.com.br
      base: '/', 
      // ------------------------------------------------------------------
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // Mantém seu alias configurado para importações como @/components
          '@': path.resolve(projectRootDir, '.'),
        }
      }
    };
});
