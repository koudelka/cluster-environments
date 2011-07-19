var appName = 'myApp'

module.exports = {
  externalHostname: 'api.myApp.com',

  mongo: {
    database: appName + '_development',
    collection: 'junk',
    host: 'mongo',
    port: 27017
  },

  hoptoad: {
    apiKey: 'ABCDEFGH'
  }
}

