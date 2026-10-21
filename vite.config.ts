import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// A imagem de prévia do link precisa de endereço completo (https://...).
// Na Vercel, o domínio de produção vem da variável VERCEL_PROJECT_PRODUCTION_URL.
// Se quiser fixar outro domínio, defina SITE_URL nas variáveis de ambiente.
function siteUrl(): Plugin {
  const url =
    process.env.SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '.');
  return {
    name: 'site-url',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', url.replace(/\/$/, '')),
  };
}

// `npm run build` gera a pasta dist/ (usada pela Vercel).
// `npm run build:single` gera um único index.html com tudo embutido,
// que abre até sem internet (bom para a apresentação).
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [react(), siteUrl(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  build: mode === 'single' ? { outDir: 'dist-single', assetsInlineLimit: 100_000_000 } : {},
}));
