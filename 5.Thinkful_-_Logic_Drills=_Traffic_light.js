// Thinkful - Logic Drills: Traffic light
// Level : 8 kyu
// link : https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {
  // ++ Awal ketemu ++
  // const color = ["green", "yellow", "red"];
  // for (let i = 0; i < color.length; i++) {
  //   if (current == color[i]) {
  //     return color[i + 1];
  //   } else if (current == "red") {
  //     return color[0];
  //   }
  // }

  // ++Jawaban orang lain++
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
