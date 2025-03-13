// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [icon()],
    server: {
        host: true, // Allow connections from all addresses
        port: 4322,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    vite: {
        server: {
            strictPort: true,
            hmr: {
                clientPort: 443
            },
            allowedHosts: [
                'localhost',
                '*.trycloudflare.com'
            ]
        }
    }
});
