var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mvc-structure'
    },
    port: process.env.PORT || 3200,
    db: 'mysql://root:root@localhost/mvc'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mvc-structure'
    },
    port: process.env.PORT || 3200,
    db: 'mysql://localhost/mvc-structure-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mvc-structure'
    },
    port: process.env.PORT || 3200,
    db: 'mysql://localhost/mvc-structure-production'
  }
};

module.exports = config[env];
