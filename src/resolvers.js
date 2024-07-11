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
        authorId: '1',
        // This product belongs to the "Education" category
        categoriesIds: ['1']
    },
    {
        name: 'Apollo',
        description: 'The Apollo Data Graph Platform',
        url: 'https://www.apollographql.com/',
        numberOfVotes: 5,
        publishedAt: '2021-01-08',
        authorId: '2',
        // This product belongs to the "Frameworks" and "API" categories
        categoriesIds: ['2', '3']
    },
    {
        name: 'OneGraph',
        description: 'Build Integrations 100x Faster',
        url: 'https://www.onegraph.com',
        numberOfVotes: 5,
        publishedAt: '2020-08-22',
        authorId: '1',
        // This product belongs to the "API" category
        categoriesIds: ['3']
    },
]

const categoriesData = [
    {
        id: '1',
        slug: 'education',
        name: 'Education',
    },
    {
        id: '2',
        slug: 'frameworks',
        name: 'Frameworks',
    },
    {
        id: '3',
        slug: 'api',
        name: 'API',
    },
]


const resolvers = {
    Query: {
        appName: () => "First GraphQL output",
        allProducts: () => {
            console.log('Query.allProducts');
            return productsData;
        },
        productsByAuthorName: (parent, {authorName}) => {
            const user = usersData.find(user => user.userName === authorName);
            return productsData.filter(product => product.authorId === user.id);
        },
        productsByCategory: (_, {slug}) => {
            const category = categoriesData.find(each => each.slug === slug);
            return productsData.filter(each => each.categoriesIds.includes(category.id));
        }
    },

    Product: {
        author: (product) => {
            console.log(`Query.Product.author for "${product.name}"`)
            return usersData.find((each) => each.id === product.authorId);
        },
        categories: (product) => {
            return categoriesData.filter((each) => product.categoriesIds.includes(each.id));
        }
    }
}


module.exports = {resolvers}