// Clothes size number converter
// Level : 7 kyu
// link : https://www.codewars.com/kata/667dfbaa4570b2db26aedc8c

function sizeToNumber(size) {
  // ++ Awal ketemu ++
  // const m = 38;
  // if (size == "m") {
  //   return m;
  // } else if (size == "s") {
  //   return m - 2;
  // } else if (size == "l") {
  //   return m + 2;
  // } else if (size.includes("x")) {
  //   const calcuX = (size.split("x").length - 1) * 2;
  //   if (size.charAt(size.length - 1) == "s") {
  //     return m - 2 - calcuX;
  //   } else if (size.charAt(size.length - 1) == "l") {
  //     return m + 2 + calcuX;
  //   } else {
  //     return null;
  //   }
  // } else {
  //   return null;
  // }

  // ++ Persingkat ke 1, dibantu chatGPT ++
  const m = 38;
  if (size === "m") return m;
  if (size === "s") return m - 2;
  if (size === "l") return m + 2;

  if (size.includes("x")) {
    const calcuX = (size.split("x").length - 1) * 2;
    if (size.endsWith("s")) return m - 2 - calcuX;
    if (size.endsWith("l")) return m + 2 + calcuX;
    if (size.endsWith("m")) return null;
    if (size.endsWith("x")) return null;
  } else {
    return null;
  }

  // ++Jawaban orang lain++
  // if (size == "s") return 36;
  // if (size == "m") return 38;
  // if (size == "l") return 40;
  // const x = size.match(/x/g)?.length;
  // if (/^x+s$/.test(size)) return 36 - x * 2;
  // if (/^x+l$/.test(size)) return 40 + x * 2;
  // return null;
}

console.log(sizeToNumber("xl"));
console.log(sizeToNumber("x"));
