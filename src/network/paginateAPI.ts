/**
 * Handles paginated REST APIs by repeatedly calling fetchPageFn.
 *
 * Example: paginateAPI(fetchPageFn) → [all results]
 *
 * @author @dailker
 * @param {(page: number) => Promise<{ data: any[], nextPage?: number|null }>} fetchPageFn - Function to fetch a page.
 * @returns {Promise<any[]>} All results combined.
 */
export async function paginateAPI(fetchPageFn: (page: number) => Promise<{ data: any[], nextPage?: number | null }>): Promise<any[]> {
  let page = 1;
  let results: any[] = [];
  while (true) {
    const res = await fetchPageFn(page);
    results = results.concat(res.data);
    if (!res.nextPage) break;
    page = res.nextPage;
  }
  return results;
}
