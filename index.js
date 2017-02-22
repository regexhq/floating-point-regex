/*!
 * floating-point-regex <https://github.com/regexhq/floating-point-regex>
 *
 * Copyright (c) 2016-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function() {
  return /^(([-+])?([0-9]*)(\.?[0-9]+)?(([Ee])?([-+])?([0-9]*)))+$/;
};
