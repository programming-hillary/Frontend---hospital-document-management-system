import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run org.mwashi-mwale:serve',
        production: 'nx run org.mwashi-mwale:preview',
      },
      ciWebServerCommand: 'nx run org.mwashi-mwale:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
