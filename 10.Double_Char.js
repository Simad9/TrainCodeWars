// Double Char
// Level : 8 kyu
// link : https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
  // ++ Awal ketemu ++
  // const slice = str.split("");
  // let result = "";
  // slice.forEach((el) => {
  //   result = result + el + el;
  // });
  // return result;

  // ++ Persingkat ke 1 ++
  // let result = "";
  // str.split("").forEach((el) => {
  //   result += el + el;
  // });
  // return result;

  // ++Jawaban orang lain++
  return str
    .split("") // dipecah
    .map((c) => c + c) // dibikin doubel char
    .join(""); // digabungin

  // ++Jawaban orang lain++
  // return str.replace(/(.)/g, "$1$1");
}

console.log(doubleChar("abcd"));
console.log(doubleChar("1337"));
