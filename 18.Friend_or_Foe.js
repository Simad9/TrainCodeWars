// Friend or Foe?
// Level : 7 kyu
// link : https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends) {
  // ++ Awal ketemu ++
  // const list = [];
  // friends.map((el) => {
  //   if (el.length == 4) {
  //     list.push(el);
  //   }
  // });
  // return list;

  // ++ Persingkat ke 1, dibantu ChatGPT ++
  // const list = friends.filter((el) => el.length == 4);
  // return list;

  // ++Jawaban orang lain++
  return friends.filter((n) => n.length === 4);
}

console.log(friend(["Ryan", "asd1", "Mark"]));
