// Short Long Short
// Level : 8 kyu
// link : https://www.codewars.com/kata/50654ddff44f800200000007

function solution(a, b) {
  // ++ Awal ketemu ++
  //   let hasil = "";
  //   if (a.length < b.length) {
  //     let short = a;
  //     let long = b;
  //     hasil = short + long + short;
  //   } else {
  //     let short = b;
  //     let long = a;
  //     hasil = short + long + short;
  //   }
  //   return hasil;

  // ++ Persingkat ke 1 ++ 
  return a.length < b.length ? a + b + a : b + a + b;
}

console.log(solution("1", "22"));
console.log(solution("22", "1"));
