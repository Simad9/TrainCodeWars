// Parse nice int from char problem
// Level : 8 kyu
// link : https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

/* SOAL
DESCRIPTION:
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

*/

function getAge(inputString) {
  // ++ Awal ketemu ++
  // let hasil = parseInt(inputString.split("")[0]);
  // console.log(hasil);
  // return hasil;

  // ++ Persingkat ke 1 ++
  // return parseInt(inputString.split("")[0]);

  // ++Jawaban orang lain++
  return parseInt(inputString);
}

console.log(getAge("4 years old"));
