/**
 * Describes the shape of a boolean signal: [↑1, ↓0, ↑2].
 * @author @dailker
 */
export function boolShape(arr: boolean[]): string[] {
  if (!arr.length) return [];
  let shape: string[] = [], last = arr[0], count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === last) count++;
    else {
      shape.push((last ? '↑' : '↓') + count);
      count = 1;
      last = arr[i];
    }
  }
  shape.push((last ? '↑' : '↓') + count);
  return shape;
}
