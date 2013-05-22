#!/usr/bin/env node

var format = require('..')
  , argv = process.argv;

var indent = (function() {
  var indentIdx = argv.indexOf('--indent');
  indentIdx = ~indentIdx ? indentIdx : argv.indexOf('-i');
  return ~indentIdx ? argv[indentIdx + 1] : 2;
})();

process.stdin.pipe(format(parseInt(indent, 10))).pipe(process.stdout);
