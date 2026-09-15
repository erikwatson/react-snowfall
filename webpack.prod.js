import path from 'path'
import { fileURLToPath } from 'url'
import { merge } from 'webpack-merge'
import common from './webpack.common.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const externals = {
  react: 'react',
  'react-dom': 'react-dom',
  '@erikwatson/snowfall': '@erikwatson/snowfall'
}

export default [
  merge(common, {
    mode: 'production',

    experiments: {
      outputModule: true
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.esm.js',
      module: true,
      clean: true,
      library: {
        type: 'module'
      }
    },

    externalsType: 'module',
    externals
  }),

  merge(common, {
    mode: 'production',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.cjs',
      clean: true,
      library: {
        type: 'commonjs2'
      }
    },

    externalsType: 'commonjs',
    externals
  })
]