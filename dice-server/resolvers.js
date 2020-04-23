const db = require('./db');

const resolvers = {
  Query: {
    notes() {
      return db.any(`SELECT * FROM notes`)
    },
    note(_, { author }) {
      return db.one(`SELECT * FROM notes WHERE author = $1`, author)
    },
    notesByAuthor(_, { author }) {
      return db.any(`SELECT * FROM notes WHERE author = $1`, author)
    }
  }
}

module.exports = resolvers;
