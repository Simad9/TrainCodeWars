// Grasshopper - Terminal game combat function
// Level : 8 kyu
// link : https://www.codewars.com/kata/586c1cf4b98de0399300001d

function combat(health, damage) {
    // ++ Awal ketemu ++
  // const result = health - damage;
  // if (result < 0) {
  //   return 0;
  // }
  // return result;

  // ++ Persingkat ke 1 ++
  return health - damage < 0 ? 0 : health - damage;

  // ++Jawaban orang lain++
  //  return Math.max(0, health - damage);
}

// ++ arrow function ++
// const combat = (health, damage) => health - damage < 0 ? 0 : health - damage

console.log(combat(100, 5));
console.log(combat(92, 8));
console.log(combat(20, 30));
