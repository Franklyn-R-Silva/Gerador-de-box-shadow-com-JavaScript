import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['js/model/ShadowModel.js'],
      exclude: ['**/*.test.js', 'node_modules/**'],
    },
  },
});
