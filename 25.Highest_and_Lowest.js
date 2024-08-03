// Highest and Lowest
// Level : 7 kyu
// link : https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  // ++ Awal ketemu ++
  // let x = numbers.split(" ").map((el) => parseInt(el));
  // let len = x.length;
  // let min = Infinity;
  // let max = -Infinity;
  // while (len--) {
  //   if (x[len] < min) {
  //     min = x[len];
  //   }
  //   if (x[len] > max) {
  //     max = x[len];
  //   }
  // }
  // let z = [max, min];
  // return z.join(" ");

  // ++ Persingkat ke 1 ++
  const x = numbers.split(" ").map((el) => parseInt(el));
  const z = [Math.max.apply(null, x), Math.min.apply(null, x)];
  return z.join(" ");

  // ++ Persingkat ke 2 ++
  // return [
  //   Math.max.apply(
  //     null,
  //     numbers.split(" ").map((el) => parseInt(el))
  //   ),
  //   Math.min.apply(
  //     null,
  //     numbers.split(" ").map((el) => parseInt(el))
  //   ),
  // ].join(" ");

  // ++Jawaban orang lain++
  // numbers = numbers.split(" ");
  // return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 3 4 -5"));
