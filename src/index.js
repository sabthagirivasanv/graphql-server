const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
type Query{
    appName: String
}
`

const resolvers = {
    Query: {
        appName: () => "First GraphQL output"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(
    () => console.log("Server up and running in port: 4000")
)