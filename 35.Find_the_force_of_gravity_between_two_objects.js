// Find the force of gravity between two objects
// Level : 8 kyu
// link : https://www.codewars.com/kata/5b609ebc8f47bd595e000627

// solution = (arr_val, arr_unit) => {
//   // ++ Awal ketemu ++
//   const G = 6.67 * Math.pow(10, -11);
//   if (arr_unit[0] != "kg") {
//     switch (arr_unit[0]) {
//       case "g":
//         arr_val[0] = arr_val[0] * 0.001;
//         break;
//       case "mg":
//         arr_val[0] = arr_val[0] * Math.pow(10, -6);
//         break;
//       case "μg":
//         arr_val[0] = arr_val[0] * Math.pow(10, -9);
//         break;
//       case "lb":
//         arr_val[0] = arr_val[0] * 0.453592;
//         break;
//     }
//   }
//   if (arr_unit[1] != "kg") {
//     switch (arr_unit[1]) {
//       case "g":
//         arr_val[1] = arr_val[1] * 0.001;
//         break;
//       case "mg":
//         arr_val[1] = arr_val[1] * Math.pow(10, -6);
//         break;
//       case "μg":
//         arr_val[1] = arr_val[1] * Math.pow(10, -9);
//         break;
//       case "lb":
//         arr_val[1] = arr_val[1] * 0.453592;
//         break;
//     }
//   }
//   if (arr_unit[2] != "m") {
//     switch (arr_unit[2]) {
//       case "cm":
//         arr_val[2] = arr_val[2] * 0.01;
//         break;
//       case "mm":
//         arr_val[2] = arr_val[2] * 0.001;
//         break;
//       case "μm":
//         arr_val[2] = arr_val[2] * Math.pow(10, -6);
//         break;
//       case "ft":
//         arr_val[2] = arr_val[2] * 0.3048;
//         break;
//     }
//   }
//   return (G * arr_val[0] * arr_val[1]) / Math.pow(arr_val[2], 2);
// };

function solution([m1, m2, d], [um1, um2, ud]) {
  const G = 6.67e-11;
  const conversion = {
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    μg: 1e-9,
    lb: 0.453592,
    m: 1,
    cm: 1e-2,
    mm: 1e-3,
    μm: 1e-6,
    ft: 0.3048,
  };
  return (
    (G * m1 * conversion[um1] * m2 * conversion[um2]) /
    (d * conversion[ud]) ** 2
  );
}

console.log(solution([1000, 1000, 100], ["g", "kg", "m"]));
