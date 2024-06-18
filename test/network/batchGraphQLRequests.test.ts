import { batchGraphQLRequests } from '../../src/network/batchGraphQLRequests';

describe('batchGraphQLRequests', () => {
  it('sends multiple GraphQL queries (mocked)', async () => {
    global.fetch = jest.fn(async (url, opts) => ({ json: async () => JSON.parse(opts.body as string) })) as any;
    const queries = [
      { query: 'query1', variables: { a: 1 } },
      { query: 'query2', variables: { b: 2 } }
    ];
    const endpoint = 'https://graphql.com';
    const result = await batchGraphQLRequests(queries, endpoint);
    expect(result).toEqual(queries);
  });
});
