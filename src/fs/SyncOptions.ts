/**
 * Options for directory synchronization.
 * @author @dailker
 */
export interface SyncOptions {
    overwrite?: boolean;
    deleteExtra?: boolean;
    filter?: (filePath: string) => boolean;
}
