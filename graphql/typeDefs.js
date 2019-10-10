  const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    posts(postType: String!): [Post]!
    post(_id: String!): Post!
  }
  type Post {
    _id: ID!
    title: String!
    text: String!
    postType: String!
    date: String!
  }
  type Mutation {
    createPost(title: String!, text: String!, postType: String!): Post!
  }
`;

module.exports = typeDefs;