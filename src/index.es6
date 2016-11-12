module.exports = function(source) {
  return `var tpl = require('gz-util-tool-tpl').tpl;
  module.exports = function (data) {
    return tpl('${source}')(data);
  };`.replace(/\r|\n/g, '');
}
