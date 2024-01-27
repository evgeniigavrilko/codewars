//8 kyu
//Merge two sorted arrays into one

//Link:
//https://www.codewars.com/kata/merge-two-sorted-arrays-into-one

//Solution:
function mergeArrays(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2];
  const uniqueArray = [...new Set(mergedArray)];
  return uniqueArray.sort((a, b) => a - b);
}