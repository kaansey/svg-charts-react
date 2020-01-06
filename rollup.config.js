import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
// import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    external: [
      Object.keys(pkg.peerDependencies),
      Object.keys(pkg.dependencies),
    ],
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
      sizeSnapshot(),
      // terser(), // minifies generated bundles
    ],
  },
]
