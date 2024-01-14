//8 kyu
//Student's Final Grade

//Link:
//https://www.codewars.com/kata/students-final-grade

//Solution:
function finalGrade(exam, projects) {
  return (exam > 90 || projects > 10) ? 100 :
         (exam > 75 && projects >= 5) ? 90 :
         (exam > 50 && projects >= 2) ? 75 : 0;
}
