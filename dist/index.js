'use strict';

module.exports = function (source) {
  return ('var tpl = require(\'gz-util-tool-tpl\').tpl;\n  module.exports = function (data) {\n    return tpl(\'' + source + '\')(data);\n  };').replace(/\r|\n/g, '');
};