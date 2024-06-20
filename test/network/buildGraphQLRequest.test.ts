import { buildGraphQLRequest } from '../../src/network/buildGraphQLRequest';

describe('buildGraphQLRequest', () => {
  it('builds a GraphQL request body', () => {
    const query = 'query { foo }';
    const variables = { a: 1 };
    expect(buildGraphQLRequest(query, variables)).toEqual({ query, variables });
  });
  it('defaults variables to empty object', () => {
    expect(buildGraphQLRequest('q')).toEqual({ query: 'q', variables: {} });
  });
});
