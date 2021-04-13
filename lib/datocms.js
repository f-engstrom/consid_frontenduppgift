import {GraphQLClient} from "graphql-request";

export function request({query, variables, preview}) {
    const endpoint = preview
        ? `https://graphql.datocms.com/preview`
        : `https://graphql.datocms.com/`;
    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer 6cd8fe5d5bbe8d5fa2500baffe1f81`
        }
    });
    
    return client.request(query, variables);
}