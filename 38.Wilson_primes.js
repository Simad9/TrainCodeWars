// Wilson primes
// Level : 8 kyu
// link : https://www.codewars.com/kata/55dc4520094bbaf50e0000cb

function amIWilson(p) {
  //++ Awal ketemu ++
  // let factorial = BigInt(1);
  // for (let i = 2; i <= p - 1; i++) {
  //   factorial *= BigInt(i);
  // }
  // return (factorial + BigInt(1)) % (BigInt(p) * BigInt(p)) == 0;

  // ++Jawaban orang lain++
  return p == 5 || p == 13 || p == 563;
}

console.log(amIWilson(5));
console.log(amIWilson(9));
console.log(amIWilson(563));
