/**
 * Represents a difference between two files or directories.
 * @author @dailker
 */
export interface FileDiff {
    path: string;
    type: 'added' | 'removed' | 'modified' | 'conflict';
    srcStat?: import('fs').Stats;
    destStat?: import('fs').Stats;
}
