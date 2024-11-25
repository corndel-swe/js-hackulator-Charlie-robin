/**
 * Uses Heron's formula to calculate the area of a triangle
 * with sides of length a, b, c
 * https://en.wikipedia.org/wiki/Heron%27s_formula
 */
function heron(a, b, c) {
  let semiPerimeter = (a + b + c) / 2;
  return Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
}

export default heron
