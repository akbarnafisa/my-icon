import globby from 'globby'
import vue from 'rollup-plugin-vue'
import cjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import image from '@rollup/plugin-image'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

const vuePluginConfig = {
  template: {
    isProduction: true,
    compilerOptions: {
      whitespace: 'condense'
    }
  },
  css: false
}

const babelConfig = {
  exclude: 'node_modules/**',
  runtimeHelpers: true,
  babelrc: false,
  presets: [['@babel/preset-env', { modules: false }]],
  extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue', '.svg'],
}

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
]

const plugins = [
  resolve({
    extensions: ['.vue', '.js']
  }),
  image(),
  vue(vuePluginConfig),
  babel(babelConfig),
  cjs(),
  production && terser()
]

function generateComponentInput(pathList) {
  return pathList.reduce((acc, curr) => {
    const filename = curr.match(/([^\/]+)(?=\.\w+$)/)[0]
    return {
      ...acc,
      [filename]: curr,
    }
  }, {})
}

export default globby([
  'components/**/*.vue',
])
  .then((pathList) => generateComponentInput(pathList))
  .then((componentInput) => ([
    {
      input: {
        index: './index.js',
        ...componentInput,
      },
      output: {
        dir: 'dist/esm',
        format: 'esm'
      },
      plugins,
      external
    },
    {
      input: {
        index: './index.js',
        ...componentInput,
      },
      output: {
        dir: 'dist/cjs',
        format: 'cjs',
        exports: 'named'
      },
      plugins,
      external
    },
  ]))
