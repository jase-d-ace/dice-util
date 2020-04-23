const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    notes: [Note]
    note(author: String): Note
  }
  type Note {
    id: Int
    title: String
    content: String
    author: String
    }
`;

module.exports = typeDefs;
