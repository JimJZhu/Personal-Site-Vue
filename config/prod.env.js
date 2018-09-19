const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
require('dotenv').config();

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  FIREBASE_KEY: JSON.stringify(process.env.FIREBASE_KEY),
  FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
  FIREBASE_DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
  FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
  FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(
    process.env.FIREBASE_MESSAGING_SENDER_ID,
  ),
});
