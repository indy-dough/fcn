import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig({
  plugins: [
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
  ],
  build: {
    target: 'es6',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      name: 'index',
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
    },
  },
});
