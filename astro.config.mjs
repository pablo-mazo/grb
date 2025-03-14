// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import node from '@astrojs/node';
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],

  server: {
      host: true, // Allow connections from all addresses
      port: 4321,
      headers: {
          'Access-Control-Allow-Origin': '*'
      }
  },

  vite: {
      plugins: [basicSsl()],
      server: {
          strictPort: true,
	  https: true,
          hmr: {
              clientPort: 443
          },
          allowedHosts: [
              'localhost',
              '*.trycloudflare.com'
          ]
      }
  },

  adapter: node({
    mode: 'standalone'
  })
});
