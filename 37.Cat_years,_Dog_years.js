// Cat years, Dog years
// Level : 8 kyu
// link : https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

var humanYearsCatYearsDogYears = function (humanYears) {
  //++ Awal ketemu ++
  // let catYears = 0;
  // let dogYears = 0;
  // if (humanYears == 1) {
  //   catYears = 15;
  //   dogYears = 15;
  // } else if (humanYears == 2) {
  //   catYears = 15 + 9;
  //   dogYears = 15 + 9;
  // } else {
  //   let count = humanYears - 2;
  //   catYears = 15 + 9 + count * 4;
  //   dogYears = 15 + 9 + count * 5;
  // }
  // return [humanYears, catYears, dogYears];

  // ++ Persingkat ke 1 ++
  // return humanYears == 1
  //   ? [1, 15, 15]
  //   : humanYears == 2
  //   ? [2, 24, 24]
  //   : humanYears > 2
  //   ? [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24]
  //   : [0, 0, 0];

  // ++Jawaban orang lain++
  if (humanYears == 1) return [1, 15, 15];
  if (humanYears == 2) return [2, 24, 24];
  return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
};

console.log(humanYearsCatYearsDogYears(10));
