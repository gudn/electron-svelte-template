import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'
import css from 'rollup-plugin-css-only'

const production = !process.env.ROLLUP_WATCH

export default [
  {
    input: 'src/svelte.ts',
    output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/dist/bundle.js',
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess({ sourceMap: !production }),
        compilerOptions: {
          dev: !production,
        },
      }),
      css({ output: 'bundle.css' }),

      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      typescript({
        sourceMap: true,
        inlineSources: !production,
      }),

      production && terser(),
    ],
    watch: {
      clearScreen: false,
    },
  },
  {
    input: 'src/main.ts',
    output: {
      sourcemap: false,
      format: 'cjs',
      file: 'dist/main.js',
    },
    plugins: [
      typescript({
        sourceMap: false,
        inlineSources: false,
      }),
      resolve({
        resolveOnly: [/^(?!electron).*$/],
      }),
      commonjs(),

      production && terser(),
    ],
  },
]
