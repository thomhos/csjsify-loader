const csjs = require('csjs');

const csjsify = (source) => (
  typeof source === 'string'
  ? csjs`${source}`
  : source
);

const stringify = (styles) => {
  const result = Object.assign(styles, {});
  Object.keys(result).forEach((k) => (result[k] = result[k].className));
  return JSON.stringify(result);
};

module.exports = (source, map) => {
  const styles = csjsify(source);
  return `
    module.exports = [[module.id, \`${csjs.getCss(styles)}\`, ${map}]];
    module.exports.locals = ${stringify(styles)};
  `;
};
