const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
type Query{
    appName: String
}
`

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});