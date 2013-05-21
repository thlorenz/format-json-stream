'use strict';

var through = require('through');

var formatStream = module.exports = function (indent) {
  var data = '';
  return through(ondata, onend);

  function ondata(d) {
    data += d;
  }

  function onend() {
    try {
      var json = JSON.parse(data);
      this.queue(JSON.stringify(json, null, indent || 2));
    } catch (e) {

      this.queue(e.toString());
    }
    this.emit('end');
  }
};

