// Rotate for a Max
// Level : 7 kyu
// link : https://www.codewars.com/kata/56a4872cbb65f3a610000026

function maxRot(n) {
  // ++ Gagal Ketemu ++
  // let arr = n.toString().split("");
  // for (i = 0; i < arr.length; i++) arr[i] = +arr[i] | 0;

  // let result1 = 0;
  // let result2 = 0;
  // arr[arr.length] = arr[0];
  // arr.splice(0, 1);
  // for (let z = 1; z <= arr.length; z++) {
  //   if (result1 > result2) {
  //     arr[arr.length] = arr[z];
  //     arr.splice(z, 1);
  //   }
  // }
  // result2 = parseInt(arr.toString().replaceAll(",", ""));
  // console.log(result1);
  // console.log(result2);
  // return result2;

  // ++ Jawaban ChatGPT, Sudah 1 jam lebih berfikir ++
  // let str = n.toString();
  // let maxNum = n;
  // for (let i = 0; i < str.length - 1; i++) {
  //   // algoritma berjalan
  //   str = str.slice(0, i) + str.slice(i + 1) + str[i];
  //   // jadi int
  //   let rotatedNum = parseInt(str);
  //   // dibandingkan
  //   if (rotatedNum > maxNum) {
  //     maxNum = rotatedNum;
  //   }
  // }
  // return maxNum;

  // ++Jawaban orang lain++
  let max = n;
  let arr = String(n).split("");
  
  for (let i = 0; i < arr.length; i++) {
    arr.push(arr.splice(i, 1));
    const num = Number(arr.join(""));
    if (num > max) max = num;
  }
  return max;
}

// console.log(maxRot(38458215)); //85821534
// console.log(maxRot(195881031)); //988103115
// console.log(maxRot(896219342)); //962193428
// console.log(maxRot(69418307)); //94183076
console.log(maxRot(240522578)); //452782025
