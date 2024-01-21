//8 kyu
//String ends with?

//Link:
//https://www.codewars.com/kata/string-ends-with

//Solution:
function solution(str, ending) {
  const result = ending === "" || str.slice(-ending.length) === ending;
  return result;
}