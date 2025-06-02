// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://mellow-zuccutto-c04d24.netlify.app",
  integrations: [preact()]
});