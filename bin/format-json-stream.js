#!/usr/bin/env node

var format = require('..')
  , indent = 2
  , argv = process.argv;

var indentIdx = argv.indexOf('--indent') || argv.indexOf('-i');
if (~indentIdx) {
  indent = argv[indentIdx + 1];
}

process.stdin.pipe(format(parseInt(indent, 10))).pipe(process.stdout);
