// Return the day
// Level : 8 kyu
// link : https://www.codewars.com/kata/643af0fa9fa6c406b47c5399

function whatday(num) {
  // ++ Awal ketemu ++
  // const day = {
  //   1: "Sunday",
  //   2: "Monday",
  //   3: "Tuesday",
  //   4: "Wednesday",
  //   5: "Thursday",
  //   6: "Friday",
  //   7: "Saturday",
  // };
  // for (let i = 1; i <= 7; i++) {
  //   if (num === i) {
  //     return day[i];
  //   }
  // }
  // return "Wrong, please enter a number between 1 and 7";

  // ++ Persingkat ke 1, bantuan chatGPT ++
  const day = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  return day[num] || "Wrong, please enter a number between 1 and 7";
  // ++ Persingkat ke 2 ++
  // const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // return day[num - 1] || "Wrong, please enter a number between 1 and 7";
}

console.log(whatday(7));
