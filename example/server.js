var cluster = require('cluster'),
    path = require('path'),
    environments = require('../');
    //environments = require('cluster-environments');

cluster('./app')
  .set('workers', 1)
  .use(cluster.debug())
  .use(cluster.logger('logs', 'debug'))
  .use(environments())
  .listen(3000);
