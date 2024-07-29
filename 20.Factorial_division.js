// Factorial division
// Level : 7 kyu
// link : https://www.codewars.com/kata/52f3a8e1f85fadcdf7001e31

function factorialDivision(n, d) {
  // ++ Awal ketemu ++, Salah logika timeout tadi
  // if (n > d) {
  //   let result = BigInt(1);
  //   for (let i = BigInt(d + 1n); i <= n; i++) {
  //     result *= BigInt(i);
  //   }
  //   return result;
  // } else {
  //   return BigInt(1);
  // }

  // ++Jawaban orang lain++
  let result = 1n;
  for (let i = d + 1n; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialDivision(5n, 3n));
// console.log(factorialDivision(94906265n, 94906263n));
