// Find min and max
// Level : 7 kyu
// link : https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130

function getMinMax(arr) {
  // // ++ Awal ketemu ++
  // let result = [];
  // let min = Math.min.apply(null, arr);
  // let max = Math.max.apply(null, arr);
  // result.push(min);
  // result.push(max);
  // return result;

  // ++ Persingkat ke 1 ++
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)];

  // ++Jawaban orang lain++
  return [Math.min(...arr), Math.max(...arr)];

  
}

console.log(getMinMax([1]));
