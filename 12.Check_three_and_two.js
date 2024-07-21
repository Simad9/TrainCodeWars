// Check three and two
// Level : 7 kyu
// link : https://www.codewars.com/kata/5a9e86705ee396d6be000091

function checkThreeAndTwo(array) {
  // ++ Awal ketemu ++
  // let var1 = 0;
  // let var2 = 0;
  // let var3 = 0;
  // array.filter((el) => {
  //   if (el == "a") {
  //     var1++;
  //   } else if (el == "b") {
  //     var2++;
  //   } else if (el == "c") {
  //     var3++;
  //   }
  // });
  // let a = [var1, var2, var3];
  // for (let i = 0; i < a.length; i++) {
  //   if (a[i] == 3) {
  //     for (let j = 0; j < a.length; j++) {
  //       if (a[j] == 2) {
  //         return true;
  //       }
  //     }
  //   }
  // }
  // return false;

  // ++ Persingkat ke 1 ++
  let var1 = 0;
  let var2 = 0;
  let var3 = 0;
  array.filter((el) => {
    if (el == "a") {
      var1++;
    } else if (el == "b") {
      var2++;
    } else if (el == "c") {
      var3++;
    }
  });
  return (var1 == 3 || var2 == 3 || var3 == 3) && (var1 == 2 || var2 == 2 || var3 == 2)

  // ++ Persingkat ke 2 : ChatGPT ++
  // let count = array.reduce(
  //   (temp, el) => {
  //     if (el == "a" || el == "b" || el == "c") {
  //       temp[el]++;
  //     }
  //     return temp;
  //   },
  //   { a: 0, b: 0, c: 0 }
  // );

  // return (
  //   (count.a == 3 && (count.b == 2 || count.c == 2)) ||
  //   (count.b == 3 && (count.a == 2 || count.c == 2)) ||
  //   (count.c == 3 && (count.a == 2 || count.b == 2))
  // );

  // ++Jawaban orang lain++
  let as = array.filter((x) => x === "a").length;
  let bs = array.filter((x) => x === "b").length;
  let cs = array.filter((x) => x === "c").length;
  return (
    (as === 3 || bs === 3 || cs === 3) && (as === 2 || bs === 2 || cs === 2)
  );
}

console.log(checkThreeAndTwo(["b", "a", "b", "b", ""]));
console.log(checkThreeAndTwo(["c", "c", "c", "b", "b"]));
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]));
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]));
