# format-json-stream [![build status](https://secure.travis-ci.org/thlorenz/format-json-stream.png)](http://travis-ci.org/thlorenz/format-json-stream)

Formats a JSON stream to make it more readable by adding proper indentation and newlines.

```js
var format = require('format-json-stream')

// formats with indent 2
process.stdin.pipe(format()).pipe(process.stdout);

// formats with indent 4
process.stdin.pipe(format(4)).pipe(process.stdout);
```
