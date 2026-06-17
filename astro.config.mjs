// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

const getSiteUrl = () => {
  // Kalau di Cloudflare, pake URL bawaan mereka
  if (process.env.CF_PAGES_URL) return process.env.CF_PAGES_URL;
  // Kalau di Vercel, pake URL bawaan mereka
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  // Kalau lagi develop atau custom domain sendiri, pake environment variable manual
  return process.env.SITE_URL || 'http://localhost:4321';
};

// https://astro.build/config
export default defineConfig({
  site: getSiteUrl(),

  vite: {
    server: {
      allowedHosts: [
        "uncut-eloquence-skilled.ngrok-free.dev"
      ]
    },
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});