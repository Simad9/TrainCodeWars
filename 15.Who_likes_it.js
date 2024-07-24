// Who likes it?
// Level : 6 kyu
// link : https://www.codewars.com/kata/55a5bfaa756cfede78000026

function likes(names) {
  // ++ Awal ketemu ++
  const total = names.length;
  if (total == 0) {
    return "no one likes this";
  } else if (total == 1) {
    return `${names.toString()} likes this`;
  } else if (total == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (total == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${total - 2} others like this`;
  }

  // ++ Persingkat ke 1, dibantu chatGPT ++
  const len = names.length;
  return len === 0
    ? "no one likes this"
    : len === 1
    ? `${names[0]} likes this`
    : len === 2
    ? `${names[0]} and ${names[1]} like this`
    : len === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${len - 2} others like this`;

  // ++Jawaban orang lain++
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}
console.log(likes([]));
console.log(likes(["Alex", "Jacob"]));
