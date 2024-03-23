/**
 * Builds a GraphQL request body.
 *
 * Example: buildGraphQLRequest(query, vars)
 *
 * @author @dailker
 * @param {string} query - GraphQL query string.
 * @param {Record<string, any>} variables - Query variables.
 * @returns {{ query: string, variables: Record<string, any> }} Request body.
 */
export function buildGraphQLRequest(query: string, variables: Record<string, any> = {}): { query: string, variables: Record<string, any> } {
  return { query, variables };
}
