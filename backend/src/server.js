// src/server.js
const config = require('../config');
const app = require('./app');

const start = async () => {
  try {
    await app.listen({ port: config.port });
    console.log(`Server listening on ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
