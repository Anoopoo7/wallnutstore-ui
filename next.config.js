const nextTranslate = require('next-translate-plugin')
const webpack = require('webpack')

module.exports = nextTranslate({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    )
    return config
  }
})
