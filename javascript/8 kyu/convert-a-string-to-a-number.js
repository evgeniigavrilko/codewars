//8 kyu
//Convert a String to a Number!

//Link:
//https://www.codewars.com/kata/convert-a-string-to-a-number

//Solution:
const stringToNumber = function(str) {
  switch (typeof str) {
    case "string":
      return Number(str);
    case "number":
      return str;
    default:
      return undefined;
  }
}