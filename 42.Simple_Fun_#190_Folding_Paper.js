// Simple Fun #190: Folding Paper
// Level : 7 kyu
// link : https://www.codewars.com/kata/58bfa1ea43fadb41840000b4

function folding(a, b) {
  // ++ Gagal Ketemu, dibantu ChatGPT ++
  // let count = 0;
  // while (b > 0) {
  //   count += Math.floor(a / b);
  //   let c = a % b;
  //   a = b;
  //   b = c;
  // }
  // return count;

  // ++Jawaban orang lain++
  if (b == 0) {
    return 0;
  } else {
    return 1 + folding(Math.max(b, a - b), Math.min(b, a - b));
  }
}

// console.log(folding(2, 1));
console.log(folding(10, 7));
