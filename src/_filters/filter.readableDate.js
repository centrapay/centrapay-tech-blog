'use strict';

const { DateTime } = require('luxon');

module.exports = function(dateObj) {
  return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('dd LLL yyyy');
};
