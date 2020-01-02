import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
// import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
      {
        file: 'example/src/libs/index.js',
        format: 'es',
        banner: '/* eslint-disable */',
      },
    ],
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      // terser(), // minifies generated bundles
    ],
  },
]
