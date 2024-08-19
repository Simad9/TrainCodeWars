// Keep up the hoop
// Level : 8 kyu
// link : https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145

function stringClean(s) {
  //++ Awal ketemu ++
  return s.replace(/[0-9]/g, "");

  // ++Jawaban orang lain++
  return s.replace(/\d/g, "");
}

console.log(stringClean("! !"));
console.log(stringClean("123"));
console.log(stringClean("E3a6t"));
