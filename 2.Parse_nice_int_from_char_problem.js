// Parse nice int from char problem
// Level : 8 kyu
// link : https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

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
