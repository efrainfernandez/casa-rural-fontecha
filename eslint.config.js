import { defineConfig, globalIgnores } from 'eslint/config'
import eslint from '@eslint/js'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default defineConfig(
  globalIgnores([
    '**/node_modules/**',
    '**/.next/**',
    '**/dist/**',
    '**/.turbo/**',
    '**/out/**',
    '**/build/**',
    'apps/web/next-env.d.ts',
    'bun.lock',
  ]),
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  ...nextVitals.map((config) => ({
    ...config,
    files: ['apps/web/**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    settings: {
      ...config.settings,
      next: {
        rootDir: 'apps/web/',
      },
    },
  })),
)
