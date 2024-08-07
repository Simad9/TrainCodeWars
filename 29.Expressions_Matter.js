// Expressions Matter
// Level : 8 kyu
// link : https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

function expressionMatter(a, b, c) {
  // ++ Awal ketemu ++
  // const op1 = a * (b + c);
  // const op2 = a * b * c;
  // const op3 = a + b * c;
  // const op4 = (a + b) * c;
  // const op5 = a + b + c;
  // return Math.max(op1, op2, op3, op4, op5);

  // ++ Persingkat ke 1 ++
  // return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);

  // ++Jawaban orang lain++
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c
  );
}

console.log(expressionMatter(2, 1, 1));
