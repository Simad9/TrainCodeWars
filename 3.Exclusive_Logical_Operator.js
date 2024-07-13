// Exclusive "or" (xor) Logical Operator
// Level : 8 kyu
// link : https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c

function xor(a, b) {
  // ++ Awal ketemu ++
  // let hasil;
  // if (a == b) {
  //   hasil = false;
  // } else {
  //   hasil = true;
  // }
  // return hasil;

  // ++ Persingkat ke 1 ++
  return a == b ? false : true;

  // ++Jawaban orang lain++
  // return a != b;
  // return (a || b) && !(a && b);
}

console.log(xor(false, false));
console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(true, true));
