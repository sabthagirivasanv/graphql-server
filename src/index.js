const {ApolloServer, gql} = require("apollo-server");
const {resolvers} = require("./resolvers");
const {readSchema} = require("./schema");


const typeDefs = readSchema();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(
    () => console.log("Server up and running in port: 4000")
)