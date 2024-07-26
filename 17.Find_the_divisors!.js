// Find the divisors!
// Level : 7 kyu
// link : https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors(integer) {
  // ++ Awal ketemu ++
  // const value = [];

  // for (let i = 2; i < integer; i++) {
  //   if (integer % i == 0) {
  //     value.push(i);
  //   }
  // }

  // if (value.length == 0) {
  //   return `${integer} is prime`;
  // }

  // return value;

  // ++ Persingkat ke 1, dibantu chatGPT++
  const value = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) value.push(i);
  }
  return value.length == 0 ? `${integer} is prime` : value;

  // ++Jawaban orang lain++
  // var res = [];
  // for (var i = 2; i <= Math.floor(integer / 2); ++i)
  //   if (integer % i == 0) res.push(i);
  // return res.length ? res : integer + " is prime";
}

console.log(divisors(12));
console.log(divisors(11));
console.log(divisors(25));
