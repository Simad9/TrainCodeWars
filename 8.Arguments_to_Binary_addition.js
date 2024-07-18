// Arguments to Binary addition
// Level : 8 kyu
// link : https://www.codewars.com/kata/57642a90dee2da8dd3000161

function arr2bin(arr) {
  // ++ Awal ketemu ++
  // console.log(arr);
  // let jumlah = 0;
  // for (let index = 0; index < arr.length; index++) {
  //   if (typeof arr[index] == "number") {
  //     const el = arr[index];
  //     jumlah = jumlah + el;
  //   }
  // }
  // console.log(jumlah);
  // // number diubah jadi biner
  // const biner = Number(jumlah).toString(2);
  // console.log(biner);
  // return biner;

  // ++ Persingkat ke 1 ++
  // let binary = 0;
  // arr.forEach((element) => {
  //   if (typeof element == "number") {
  //     binary += element;
  //   }
  // });
  // return binary.toString(2); //gak pake number langsung bisa

  // ++Jawaban orang lain++
  return arr
    .reduce((sum, cur) => (typeof cur === "number" ? sum + cur : sum), 0)
    .toString(2);
}

console.log(arr2bin([1, 2, 3, 4, 5]));
console.log(arr2bin([1, 10, 100, 1000]));
console.log(arr2bin([null]));
console.log(arr2bin([true, true, false, 15]));
