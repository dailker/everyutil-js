/**
 * Voting system for booleans: majority, unanimous, or plurality.
 * @author @dailker
 */
export function boolVotingSystem(votes: boolean[], strategy: 'majority' | 'unanimous' | 'plurality'): boolean {
  const count = votes.filter(Boolean).length;
  switch (strategy) {
    case 'majority': return count > votes.length / 2;
    case 'unanimous': return count === votes.length;
    case 'plurality': return count === Math.max(...votes.map(v => votes.filter(x => x === v).length));
    default: return false;
  }
}
