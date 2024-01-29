import { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/eslint-module', { lintOnStart: false }],
  ],
  alias: {
    '@': resolve(__dirname, './src'),
  },
  srcDir: './src',
  imports: {
    autoImport: false,
  },
  appDir: './src',
});
