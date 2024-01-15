//8 kyu
//Transportation on vacation

//Link:
//https://www.codewars.com/kata/transportation-on-vacation

//Solution:
function rentalCarCost(d) {
  if (d >= 7) {
    return (d = d * 40 - 50);
  }
  if (d >= 3) {
    return (d = d * 40 - 20);
  }
  if (d < 3) {
    return (d *= 40);
  }
}