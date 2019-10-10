const {ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const typeDefs  = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const PORT = process.env.PORT || 3001;

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

 await mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-97bqa.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.listen({ port: PORT }, () => console.log(`🚀 Server ready!`));
};

startServer();