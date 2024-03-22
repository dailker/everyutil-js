/**
 * Sends multiple GraphQL queries in one POST request.
 *
 * Example: batchGraphQLRequests([{ query, variables }])
 *
 * @author @dailker
 * @param {Array<{ query: string, variables?: Record<string, any> }>} queries - Array of queries.
 * @param {string} endpoint - GraphQL endpoint.
 * @returns {Promise<any[]>} Array of results.
 */
export async function batchGraphQLRequests(queries: Array<{ query: string, variables?: Record<string, any> }>, endpoint: string): Promise<any[]> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(queries),
  });
  return await res.json();
}
