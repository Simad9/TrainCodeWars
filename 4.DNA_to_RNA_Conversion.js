// DNA to RNA Conversion
// Level : 8 kyu
// link : https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
  // ++ Awal ketemu ++
  // if (dna.includes("T")) {
  //   return dna.replaceAll("T", "U");
  // } else {
  //   return dna.replaceAll("U", "T");
  // }

  // ++ Persingkat ke 1 ++
  return dna.includes("T")
    ? dna.replaceAll("T", "U")
    : dna.replaceAll("U", "T");

  // ++Jawaban orang lain++
  // return dna.replace(/T/g, "U");
  // return dna.replaceAll('T','U');
}

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GACCGCCGCC"));
