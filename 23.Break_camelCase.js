// Break camelCase
// Level : 6 kyu
// link : https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  // // ++ Awal ketemu ++
  // str = string.split("");
  // let number = [];

  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] == str[i].toUpperCase()) {
  //     number.push(i);
  //   }
  // }

  // // iterasi belakang biar gak mengubah index :: dibantu ChatGPT (stuck)
  // for (let y = number.length - 1; y >= 0; y--) {
  //   str.splice(number[y], 0, " ");
  // }

  // return str.join("");

  // ++ Persingkat ke 1, dibantu ChatGPT ++
  return string
    .split("")
    .map((char) => {
      return char == char.toUpperCase() ? " " + char : char;
    })
    .join("");

  // ++Jawaban orang lain++
  return string.replace(/([A-Z])/g, " $1");
  return string.split(/(?=[A-Z])/).join(" ");
}

// console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));
