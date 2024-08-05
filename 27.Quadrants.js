// Quadrants
// Level : 8 kyu
// link : https://www.codewars.com/kata/643af0fa9fa6c406b47c5399

function quadrant(x, y) {
  // ++ Awal ketemu ++
  // return (x > 0 && y > 0) ? 1 : (x < 0 && y > 0) ? 2 : (x < 0 && y < 0) ? 3 : (x > 0 && y < 0 ) ? 4 : 0;

  // ++ Persingkat ke 1 ++
  return x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4;

  // ++Jawaban orang lain++
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  return 4;
  return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
}

console.log(quadrant(1, -2));
