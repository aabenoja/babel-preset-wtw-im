const defaultSettings = require('./default-settings');

module.exports = function(context, options = {}) {
  const { env, react, extractFormatMessage, transformFormatMessage } = options;
  const isProduction = (process.env.NODE_ENV || process.env.BABEL_ENV) === 'production';

  const presets = [
    [
      require('babel-preset-env'),
      Object.assign({}, env)
    ]
  ];

  const plugins = [
    require('babel-plugin-lodash'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread')
  ];

  if (react !== false) {
    presets.push(require('babel-preset-react'));

    // shim in until babel 7.0 is released with babelrc.js support
    if (isProduction) {
      plugins.push([
        require('babel-plugin-transform-react-remove-prop-types').default,
        Object.assign({}, react)
      ]);
    }
  }

  if (react !== false ) {
    plugins.push([
      require('babel-plugin-transform-react-remove-prop-types')
    ]);
  }

  if (extractFormatMessage !== false) {
    plugins.push([
      require('babel-plugin-extract-format-message'),
      Object.assign({}, defaultSettings.extractFormatMessage, extractFormatMessage)
    ]);
  }

  if (transformFormatMessage !== false) {
    plugins.push([
      require('babel-plugin-transform-format-message'),
      Object.assign({}, defaultSettings.transformFormatMessage, transformFormatMessage)
    ]);
  }

  return {
    presets,
    plugins
  }
};