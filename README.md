# babel-preset-wtw-im

> Babel preset for Willis Towers Watson Individual Marketplace

# Install

```bash
$ npm install --save-dev babel-preset-wtw-im
```

# Usage

## Via `.babelrc` (Recommended)

### .babelrc
```json
{
  "presets": ["wtw-im"]
}
```

The preset includes the following plugins and presets:

* [babel-preset-react](https://babeljs.io/docs/plugins/preset-react/)
* [babel-preset-env](https://babeljs.io/docs/plugins/preset-env/)
* [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash)
* [babel-plugin-extract-format-message](https://www.npmjs.com/package/babel-plugin-extract-format-message)
* [babel-plugin-transform-format-message](https://www.npmjs.com/package/babel-plugin-transform-format-message)

### The React preset is included by default, there is an option to turn it off

```json
{
  "presets": [["wtw-im", { "react": false }]]
}
```

### babel-preset-env is included. To customize pass in your env options

For more information on available options, please refer to the [babel-preset-env documentation](https://babeljs.io/docs/plugins/preset-env/).

#### .babelrc
```json
{
  "presets": [["wtw-im", {
    "env": {
      "targets": { "browsers": "IE11" }
    }
  }]]
}
```

#### Node API
```js
require("babel-core").transform("code", {
  presets: [ ["wtw-im", {
    env: {
      targets: { browsers: "IE11" }
    }
  }] ]
});
```

### react-remove-prop-types

[babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) is enabled only
when react is in use and you are setting `NODE_ENV` or `BABEL_ENV` environment variables to 'production'. Options for this plugin can be passed like
so

```json
{
  "presets": [["wtw-im", {
    "react": { "mode": "wrap" }
  }]]
}
```

### extract-format-message

The [extract-format-message](https://github.com/format-message/format-message/tree/master/packages/babel-plugin-extract-format-message) plugin writes
to `locales/en.json` using the default id generator.

#### .babelrc
```json
{
  "presets": [["wtw-im", { 
    "extractFormatMessage": {
      "generateId": "literal",
      "outFile": "my/locales/path.json"
    }
  }] ]
}
```

#### Node API
```js
require("babel-core").transform("code", {
  presets: [ ["wtw-im", {
    extractFormatMessage: {
      generateId: message => messageId, // custom generator function
      outFile: "my/locales/path.json"
    }
  }] ]
})
```

The plugin can be disabled by setting `extractFormatMessage` to false

```json
{
  "presets": [["wtw-im", {
    "extractFormatMessage" false
  }]]
}
```

### transform-format-message

The [transform-format-message](https://github.com/format-message/format-message/tree/master/packages/babel-plugin-transform-format-message) plugin will not inline the text by default. Modify this as translations are introduced

#### .babelrc

```
{
  "presets": [ ["wtw-im", {
    "transformFormatMessage": {
      "inline": true
    }
  }] ]
}
```

#### Node API

```js
require("babel-core").transform("code", {
  presets: [ ["wtw-im", {
    transformFormatMessage: {
      generateId: message => messageId,
      inline: true,
      translations: require('path/to/translations'),
      locale: 'es-US'
    }
  }] ]
})
```

The plugin can be disabled by setting `transformFormatMessage` to false

```json
{
  "presets": [["wtw-im", {
    "transformFormatMessage" false
  }]]
}
```

## Via CLI
````bash
$ babel script.js --presets wtw-im
````
