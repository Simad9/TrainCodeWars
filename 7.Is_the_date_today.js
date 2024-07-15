// Is the date today
// Level : 8 kyu
// link : https://www.codewars.com/kata/563c13853b07a8f17c000022

function isToday(date) {
  // ++ Awal ketemu ++
  // const tanggal = new Date();
  // if (
  //   date.getDate() == tanggal.getDate() &&
  //   date.getFullYear() == tanggal.getFullYear()
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }

  // ++Jawaban orang lain++
  console.log(date.toDateString());
  return new Date().toDateString() === date.toDateString();
}

const today = new Date();
console.log(isToday(today));

const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
console.log(isToday(yesterday));
