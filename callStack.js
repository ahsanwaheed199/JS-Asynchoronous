let multiply = (x, y) => {
  return x * y;
};
let square = (x) => multiply(x, x);
let rightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

console.log(rightTriangle(3, 4, 5));
