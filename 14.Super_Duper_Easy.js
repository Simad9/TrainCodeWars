// Super Duper Easy
// Level : 8 kyu
// link : https://www.codewars.com/kata/55a5bfaa756cfede78000026

function problem(x) {
  // ++ Awal ketemu ++
  // if (typeof x == "string") {
  //   return "Error";
  // }
  // return x * 50 + 6;

  // ++ Persingkat ke 1 ++
  return typeof x == "string" ? "Error" : x * 50 + 6;
}

console.log(problem(1));
console.log(problem("hello"));
