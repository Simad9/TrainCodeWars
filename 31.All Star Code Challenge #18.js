// All Star Code Challenge #18
// Level : 8 kyu
// link : https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter) {
  // ++ Awal ketemu ++
  // let x = 0;
  // str = str.split("");
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] == letter) {
  //     x++;
  //   }
  // }
  // return x;

  // ++ Persingkat ke 1, bantuan chatGPT ++
  return str.split("").filter((a) => a == letter).length;

  // ++Jawaban orang lain++
  return str.split(letter).length - 1;
}

console.log(strCount("Hello", "l"));
