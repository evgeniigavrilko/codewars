//8 kyu
//Colour Association

//Link:
//hhttps://www.codewars.com/kata/colour-association

//Solution:
function colourAssociation(array) {
  const result = [];

  for (const pair of array) {
    result.push({ [pair[0]]: pair[1] });
  }

  return result;
}