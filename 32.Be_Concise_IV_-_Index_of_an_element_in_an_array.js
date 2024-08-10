// Be Concise IV - Index of an element in an array
// Level : 8 kyu
// link : https://www.codewars.com/kata/5703c093022cd1aae90012c9

// dibantu ChatGPT
// const find = (arr, el) =>
//   arr.indexOf(el) != -1 ? arr.indexOf(el) : "Not found";

// ++Jawaban orang lain++
var find = (a, e) => (a.includes(e) ? a.indexOf(e) : "Not found");

let array = [2, 3, 5, 7, 11];
console.log(find(array, false));
