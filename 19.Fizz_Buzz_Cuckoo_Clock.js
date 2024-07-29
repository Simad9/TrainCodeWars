// Fizz Buzz Cuckoo Clock
// Level : 7 kyu
// link : https://www.codewars.com/kata/58485a43d750d23bad0000e6

function fizzBuzzCuckooClock(time) {
  // ++ Awal ketemu ++
  // let sound = "";
  // const clock = time.split(":");
  // if (clock[1] % 3 == 0 && clock[1] % 5 == 0) {
  //   if (clock[1] == 15 || clock[1] == 45) {
  //     sound = "Fizz Buzz";
  //   } else if (clock[1] == 30) {
  //     sound = "Cuckoo";
  //   } else {
  //     clock[0] = clock[0] == "00" ? 12 : clock[0];
  //     clock[0] = clock[0] > "12" ? clock[0] - 12 : clock[0];
  //     for (let i = 0; i < clock[0]; i++) {
  //       console.log(i);
  //       if (i == 0) {
  //         sound = "Cuckoo";
  //       } else {
  //         sound += " Cuckoo";
  //       }
  //     }
  //   }
  // } else if (clock[1] % 5 == 0) {
  //   return "Buzz";
  // } else if (clock[1] % 3 == 0) {
  //   return "Fizz";
  // } else {
  //   return "tick";
  // }
  // return sound;

  // ++ Persingkat ke 1, bantuan ChatGPT++
  // const [hours, minutes] = time.split(":");
  // if (minutes % 15 == 0) {
  //   if (minutes == 30) return "Cuckoo";
  //   if (minutes == 0) {
  //     const x = hours % 12 || 12;
  //     return "Cuckoo ".repeat(x).trim();
  //   }
  //   return "Fizz Buzz";
  // }
  // if (minutes % 5 == 0) return "Buzz";
  // if (minutes % 3 == 0) return "Fizz";
  // return "tick";

  // ++Jawaban orang lain++
  let [hour, minute] = time.split(":");
  return minute == 0
    ? "Cuckoo ".repeat(hour % 12 || 12).trim()
    : minute == 30
    ? "Cuckoo"
    : minute % 15 == 0
    ? "Fizz Buzz"
    : minute % 3 == 0
    ? "Fizz"
    : minute % 5 == 0
    ? "Buzz"
    : "tick";
}

// console.log(fizzBuzzCuckooClock("00:00"));
console.log(fizzBuzzCuckooClock("11:00"));
// console.log(fizzBuzzCuckooClock("01:00"));
// console.log(fizzBuzzCuckooClock("24:00"));
