//8 kyu
//Take an Arrow to the knee, Functionally

//Link:
//https://www.codewars.com/kata/take-an-arrow-to-the-knee-functionally

//Solution:
function ArrowFunc(arr) {
  return arr.map(n => String.fromCodePoint(n)).join("");
}