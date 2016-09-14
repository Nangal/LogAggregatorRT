/*!
 * Copyright(c) 2016 Basavaraj K N <rajiff@gmail.com>
 */

/*!
 * Module dependencies.
 */

const fs = require('fs');
const envFile = require('path').join(__dirname, 'env.json');

var env = {};

// Read env.json file, if it exists, load the configs & settings from that

if (fs.existsSync(envFile)) {
  env = fs.readFileSync(envFile, 'utf-8');
  env = JSON.parse(env);
  Object.keys(env).forEach(key => process.env[key] = env[key]);
}

/**
 * Expose
 */
module.exports = {
  masterdb: 'tattva',
  mongo: {
    host: '127.0.0.1',
    port: 27017
  },
  redis: {
    host: "127.0.0.1",
    port: 6379
  },
  watchloop: {
    url: '127.0.0.1:9090'
  }
};
