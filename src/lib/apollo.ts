import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4obvujf1s7a01z235k5hqod/master',
    cache: new InMemoryCache(),
})