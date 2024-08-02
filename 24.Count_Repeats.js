// Break camelCase
// Level : 6 kyu
// link : https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061

function countRepeats(str) {
  // ++ Gagal Ketemu, dibantu ChatGPT ++
  // let i = 0;
  // let loop = 0;
  // while (i < str.length - 1) {
  //   if (str[i] == "") {
  //     i++;
  //     continue;
  //   }
  //   if (str[i] == str[i + 1]) {
  //     loop++;
  //   }
  //   i++;
  // }

  // return loop;

  // ++ Persingkat ke 1, dibantu ChatGPT ++
  // let loop = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === str[i + 1] && str[i] !== "") {
  //     loop++;
  //   }
  // }
  // return loop;

  // ++Jawaban orang lain++
  return (str.match(/(.)(?=\1)/g) || []).length;
}

// console.log(countRepeats("AABCCD"));
console.log(countRepeats("AABCCDA"));
