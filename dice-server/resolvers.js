const db = require('./db');

const resolvers = {
  Query: {
    notes() {
      return db.any(`SELECT * FROM notes`)
    }
  }
}

module.exports = resolvers;
