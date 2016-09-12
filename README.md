# csjsify-loader
A csjs loader for webpack.

## Install
```
npm i -D csjsify-loader
```

## Usage
style.csjs.js
```
const csjs = require('csjs');

module.exports = csjs`
  .foo {
    display: none;
  }
`;
```

component.js
```
import html from 'choo/html';
import { foo } from './styles.csjs';

html`<main class="${foo}"></main>`

```

webpack.config.js
```
{
    test: /\.csjs.js$/,
    loader: 'style!csjsify!val!babel'
},
```

webpack.config.js (with extract-text-plugin)
```
{
    test: /\.csjs.js$/,
    loader: ExtractTextPlugin.extract('style-loader', 'csjsify!val!babel')
},
```

### Note
The csjs module needs to be executable on your version of node
The csjs module needs to return a CSJS template stringify

### Credits go to mkazlauskas
This loader was originally written by mkazlauskas in this issue: https://github.com/rtsao/csjs/issues/29
I simply wanted to have it as npm package for ease of use.

Another csjs loader;
https://github.com/SilentCicero/csjs-loader
