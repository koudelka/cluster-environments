var http = require('http');

module.exports = http.createServer(function(req, res) {
  console.log(JSON.stringify(process.clusterEnv));
  res.end(JSON.stringify(process.clusterEnv));
});
