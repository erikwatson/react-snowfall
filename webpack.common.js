export default {
  entry: './src/index.ts',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}