const resolve = require('poi-preset-resolve-alias')

const alias = resolve({
  '@'          : './',
  '@validate'  : './validate',
  '@components': './components'
})

const config = ({ mode }) => ({
  presets: [ alias ],
  plugins: [ 'vue' ],
  extendWebpack (config) {
    const isDevelopment = mode === 'development'

    config.when(isDevelopment, (config) => {
      config.entry('index')
        .add('./docs/index.js')
    })
  }
})

module.exports = config
