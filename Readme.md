# cluster-environments

  Allows for loading environment-specific variables in Cluster.

## Installation

    $ npm install cluster-environments

## Example

config/development.js

    var appName = 'myApp'

    module.exports = {
      externalHostname: 'api.myApp.com',

      mongo: {
        database: appName + '_' + env,
        collection: 'junk',
        host: 'mongo',
        port: 27017
      },

      hoptoad: {
        apiKey: 'ABCDEFGH'
      }
    }

server.js

    var cluster = require('cluster'),
        path = require('path'),
        environments = require('cluster-environments');

    cluster('./app')
      .set('workers', 1)
      .use(cluster.debug())
      .use(cluster.logger('logs', 'debug'))
      .use(environments())
      .listen(3000);

app.js

    var http = require('http');

    module.exports = http.createServer(function(req, res) {
      console.log(JSON.stringify(process.clusterEnv));
      res.end(JSON.stringify(process.clusterEnv));
    });



Then start with:

    NODE_ENV=development node server.js


## License

(The MIT License)

Copyright (c) 2011 Michael Shapiro &lt;koudelka@ryoukai.net&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
