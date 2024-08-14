// Will you make it?
// Level : 8 kyu
// link : https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //++ Awal ketemu ++
  // return mpg * fuelLeft >= distanceToPump ? true : false;

  // ++ Persingkat ke 1 ++
  return mpg * fuelLeft >= distanceToPump;

  // ++Jawaban orang lain++
  return distanceToPump / mpg <= fuelLeft;
};

console.log(zeroFuel(100, 50, 1));
console.log(zeroFuel(60, 30, 3));
console.log(zeroFuel(22, 10, 3));
