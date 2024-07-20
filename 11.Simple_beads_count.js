// Simple beads count
// Level : 7 kyu
// link : https://www.codewars.com/kata/58712dfa5c538b6fc7000569

function countRedBeads(n) {
  // ++ Awal ketemu ++
  // if (n < 2) {
  //   return 0;
  // }

  // let hasil = 0;
  // for (let i = 0; i < n; i++) {
  //   hasil = i * 2;
  // }

  // return hasil;
  // ++ Persingkat ke 1 ++
  // let result = 0;
  // for (let i = 0; i < n; i++) {
  //   // result = (i < 2) ? 0 : (i * 2);
  //   result = i < 2 ? 0 : i * 2;
  // }
  // return result;

  // ++Jawaban orang lain++
  return n < 2 ? 0 : 2 * n - 2;
}

console.log(countRedBeads(0));
console.log(countRedBeads(1));
console.log(countRedBeads(2));
console.log(countRedBeads(3));
console.log(countRedBeads(4));
console.log(countRedBeads(5));
