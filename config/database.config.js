const db = require('monk');
const { dbURI } = require('./config');

module.exports = db.default(dbURI, { useUnifiedTopology: true });
