'use strict';
/*jshint asi: true */

var test          =  require('tape')
var formatStream  =  require('../')
var applyTransform = require('apply-transform');
var json = 
    '{ "name": "format-json-stream", '
  + '"version": "0.0.0",'
  + '"main": "format-json-stream.js", "scripts": { "test": "tap test/*.js" } }'

test('indent default 2', function (t) {
  t.plan(1)
  applyTransform(formatStream(), json, function (err, data) {
    if (err) { t.fail(err); t.end(); }
    t.equal(
        data
      , [ '{'
        , '  "name": "format-json-stream",'
        , '  "version": "0.0.0",'
        , '  "main": "format-json-stream.js",'
        , '  "scripts": {'
        , '    "test": "tap test/*.js"'
        , '  }'
        , '}'
        ].join('\n')
    )
  })
})

test('indent 4', function (t) {
  t.plan(1)
  applyTransform(formatStream(4), json, function (err, data) {
    if (err) { t.fail(err); t.end(); }
    t.equal(
        data
      , [ '{'
        , '    "name": "format-json-stream",'
        , '    "version": "0.0.0",'
        , '    "main": "format-json-stream.js",'
        , '    "scripts": {'
        , '        "test": "tap test/*.js"'
        , '    }'
        , '}'
        ].join('\n')
    )
  })
})
