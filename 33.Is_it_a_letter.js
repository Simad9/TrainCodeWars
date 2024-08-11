// Is it a letter?
// Level : 7 kyu
// link : https://www.codewars.com/kata/57a06b07cf1fa58b2b000252

function isItLetter(character) {
  // ++ Awal ketemu, dibantu ChatGPT dikit ++
  return isNaN(character.match(/[a-zA-Z]/g));

  // ++Jawaban orang lain++
  return /[a-z]/i.test(character);
  
  return character == character.toUpperCase()
    ? character !== character.toLowerCase()
    : character !== character.toUpperCase();
}

console.log(isItLetter("["));
console.log(isItLetter("1"));
console.log(isItLetter("a"));
