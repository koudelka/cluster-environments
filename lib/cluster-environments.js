/*!
 * Cluster - environments
 * Copyright (c) 2011 Michael Shapiro <koudelka@ryoukai.net>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Log  = require('log'),
    path = require('path');

module.exports = function(options) {
  options = options || {};

  function plugin(instance) {
    var nodeEnv = process.env.NODE_ENV || 'development',
        configDirectory = options.configDirectory || './config',
        environment;

    try {
      var configPath = path.join(process.cwd(), configDirectory, nodeEnv);
      environment = require(configPath);
    } catch(er) {
      var errorMsg = "No such config file: " + configPath;
      console.error(errorMsg);
      instance.log.error(errorMsg);
      throw er;
    }

    process.clusterEnv = environment;

    if (instance.isWorker)
      console.info('Worker '+ process.env.CLUSTER_WORKER + ' pid('+ process.pid +') loaded environment "' + nodeEnv + '"');
    else
      instance.log.info('Master loaded environment "' + nodeEnv + '"');
  }

  plugin.enableInWorker = true;
  return plugin;
}
