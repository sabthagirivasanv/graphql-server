const usersData = [
    {
        id: '1',
        userName: 'ellen',
        fullName: 'Ellen James'
    },
    {
        id: '2',
        userName: 'peter',
        fullName: 'Peter Miles'
    },
]

const productsData = [
    {
        name: 'Educative',
        description: 'Interactive Courses for Software Developers',
        url: 'https://educative.io/',
        numberOfVotes: 10,
        publishedAt: '2021-04-05',
        // Reference to "ellen"
        authorId: '1',
    },
    {
        name: 'Apollo',
        description: 'The Apollo Data Graph Platform',
        url: 'https://www.apollographql.com/',
        numberOfVotes: 5,
        publishedAt: '2021-01-08',
        // Reference to "peter"
        authorId: '2',
    },
    {
        name: 'OneGraph',
        description: 'Build Integrations 100x Faster',
        url: 'https://www.onegraph.com',
        numberOfVotes: 5,
        publishedAt: '2020-08-22',
        // Reference to "ellen"
        authorId: '1',
    },
]


const resolvers = {
    Query: {
        appName: () => "First GraphQL output",
        allProducts: () => productsData
    },

    Product: {
        author: (product) => {
            return usersData.find((each) => each.id === product.authorId);
        }
    }
}


module.exports = {resolvers}