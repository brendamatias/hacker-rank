/**
 *   Day 1: Functions
 *
 *   Create the function factorial here
 **/

function factorial(n) {
  let value = n;

  for (let i = n - 1; i > 0; i--) {
    value = value * i;
  }

  return value;
}
