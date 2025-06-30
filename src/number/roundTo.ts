/**
 * Rounds a number to a specified number of decimal places.
 * @author dailker
 * @param num - The number to round.
 * @param decimals - The number of decimal places.
 * @returns The rounded number.
 */
export function roundTo(num: number, decimals: number): number {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
}
