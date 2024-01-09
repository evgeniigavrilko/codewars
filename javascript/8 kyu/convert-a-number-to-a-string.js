//8 kyu
//Convert a Number to a String!

//Link:
//https://www.codewars.com/kata/convert-a-number-to-a-string

//Solution:
function numberToString(num) {
  if (typeof num !== "string") {
    return String(num);
  }
  return num;
}