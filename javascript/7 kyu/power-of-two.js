//8 kyu
//Power of two

//Link:
//https://www.codewars.com/kata/power-of-two

//Solution:
function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  }
  if (n < 1 || n % 2 !== 0) {
    return false;
  }
  return (isPowerOfTwo(n / 2));
}