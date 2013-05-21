# format-json-stream [![build status](https://secure.travis-ci.org/thlorenz/format-json-stream.png)](http://travis-ci.org/thlorenz/format-json-stream)

[![browser support](https://ci.testling.com/thlorenz/format-json-stream.png)](https://ci.testling.com/thlorenz/format-json-stream)

Formats a JSON stream to make it more readable by adding proper indentation and newlines.

```sh
# default indent 2
curl https://raw.github.com/thlorenz/format-json-stream/master/package.json | format-json-stream | head -n 20

# indent 8
curl https://raw.github.com/thlorenz/format-json-stream/master/package.json | format-json-stream --indent 8 | head -n 20

# indent 4
curl https://raw.github.com/thlorenz/format-json-stream/master/package.json | format-json-stream -i 4 | head -n 20
```

```js
var format = require('format-json-stream')

// formats with indent 2
process.stdin.pipe(format()).pipe(process.stdout);

// formats with indent 4
process.stdin.pipe(format(4)).pipe(process.stdout);
```

## Installation

    npm install format-json-stream

    # or as cli tool

    npm install -g format-json-stream
