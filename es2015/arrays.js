let result = 0;
for (let i = 0; i < 5; i++) {
  result = result + (i * 2);
}

console.log(result);

/* ---- */

const values = [0,1,2,3,4];
const result2 = values
  .reduce((prev, cur) => prev + (cur * 2))
  // .map(() => ...)
  // .filter(() => ...)

console.log(result2);

/* Lembrar de fazer HOC */