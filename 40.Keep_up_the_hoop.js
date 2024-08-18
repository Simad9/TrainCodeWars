// Keep up the hoop
// Level : 8 kyu
// link : https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145

function hoopCount(n) {
  //++ Awal ketemu ++
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";

  // ++Jawaban orang lain++
  return n < 10
    ? "Keep at it until you get it"
    : "Great, now move on to tricks";
}

console.log(hoopCount(6));
