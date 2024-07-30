// Is this a triangle?
// Level : 7 kyu
// link : https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a, b, c) {
  // // ++ Awal ketemu ++
  // if (a > 0 && b > 0 && c > 0) {
  //   if (a == b) {
  //     let result = c < a + b;
  //     return result;
  //   } else if (a == c) {
  //     let result = b < a + c;
  //     return result;
  //   } else if (b == c) {
  //     let result = a < b + c;
  //     return result;
  //   }

  //   let max = Math.max(a, b, c);
  //   let sum = a + b + c - max;

  //   if (max < sum) {
  //     return true;
  //   }
  // }
  // return false;

  // ++ Persingkat ke 1++
  // if (a > 0 && b > 0 && c > 0) {
  //   let result = false;
  //   result = a == b ? c < a + b : a == c ? b < a + c : b == c ? a < b + c : false;
  //   result = Math.max(a, b, c) < a + b + c - Math.max(a, b, c);
  //   return result;
  // }
  // return false;

  // ++Jawaban orang lain++
  return a + b > c && a + c > b && c + b > a;
}

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
console.log(isTriangle(5, 6, 3));
