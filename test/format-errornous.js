'use strict';
/*jshint asi: true */

var test          =  require('tape').test
var formatStream  =  require('../')
var applyTransform = require('apply-transform');
var json = 
    '{ "name": "format-json-stream", '
  + '"version": "0.0.0", }'
  + '"main": "format-json-stream.js", "scripts": { "test": "tap test/*.js" } }'

test('errornous json', function (t) {
  t.plan(1)
  applyTransform(formatStream(), json, function (err, data) {
    if (err) { t.fail(err); t.end(); }
    t.ok(~data.indexOf('SyntaxError: '))
  })
})
