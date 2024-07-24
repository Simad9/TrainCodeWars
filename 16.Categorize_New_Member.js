// Categorize New Member
// Level : 7 kyu
// link : https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data) {
  // ++ Awal ketemu ++
  // const result = [];
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i][0] >= 55 && data[i][1] > 7) {
  //     result.push("Senior");
  //   } else {
  //     result.push("Open");
  //   }
  // }
  // return result;

  // ++ Persingkat ke 1++
  // const result = [];
  // data.map((el) => {
  //   el[0] >= 55 && el[1] > 7 ? result.push("Senior") : result.push("Open");
  // });
  // return result;

  // ++Jawaban orang lain++
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
