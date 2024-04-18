/**
 * Adds two numbers together.
 *
 * @param {number|null|undefined} x - The first number to be added.
 * @param {number|null|undefined} y - The second number to be added.
 * @returns {number|null|undefined} The sum of x and y.
 */
export function add(x, y) {
  if (x === null || x === undefined) {
    return y;
  }

  if (y === null || y === undefined) {
    return x;
  }

  return x + y;
}
