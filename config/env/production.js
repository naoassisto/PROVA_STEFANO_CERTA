module.exports = {
  sockets: {
    onlyAllowOrigins: ["http://www.mydeployedapp.com", "http://mydeployedapp.com"]
  },
  session: {
    cookie: {
      secure: true
    }
  },
  http: {
    trustProxy: true
  },
  datastores: {
    default: {
      // adapter: 'sails-mysql',
      // url: 'mysql://user:password@host:port/database',
      // ssl: { rejectUnauthorized: true },
    },
  },
  models: {
    migrate: 'safe',
    // cascadeOnDestroy: false,
  },
  blueprints: {
    shortcuts: false,
  },
  security: {
    cors: {
      // allowOrigins: [
      //   'https://example.com',
      // ]
    },
  },
  session: {
    // adapter: '@sailshq/connect-redis',
    // url: 'redis://user:password@localhost:6379/databasenumber',
    cookie: {
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,  // 24 hours
    },
  },
  log: {
    level: 'debug'
  },
  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000, // One year
  },
  custom: {
    baseUrl: 'https://example.com',
    internalEmailAddress: 'support@example.com',
  },
};
