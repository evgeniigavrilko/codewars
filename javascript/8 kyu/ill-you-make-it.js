//8 kyu
//Will you make it?

//Link:
//https://www.codewars.com/kata/will-you-make-it

//Solution:
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft >= distanceToPump);
}