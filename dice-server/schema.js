const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    notes: [Note]
    note(author: String): Note
  }
  type Note {
    title: String
    text: String
    author: String
    }
`;

module.exports = typeDefs;
