'use strict';
/*jshint asi: true */

var test          =  require('tape').test
var formatStream  =  require('..')
var string2Stream =  require('string2stream')
var through       =  require('through')
var json = 
    '{ "name": "format-json-stream", '
  + '"version": "0.0.0", }'
  + '"main": "format-json-stream.js", "scripts": { "test": "tap test/*.js" } }'

test('errornous json', function (t) {
  t.plan(1)
  var data = ''
  string2Stream(json).pipe(formatStream()).pipe(through(ondata, onend))
  
  function ondata(d) { data += d }
  function onend() {
    t.equal(data, 'SyntaxError: Unexpected token }')
  }
})
