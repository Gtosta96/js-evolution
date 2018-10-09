const set = new Set();
set.add('one');
set.add('two');
set.add('three');

/* keys */
/* values */
/* entries */
for (const value of set) {
  console.log(value);
}

/* ---- */

const array = Array.from(set);
console.log(array);

/* ---- */

const repeatedValues = ['one', 'two', 'three', 'one'];
const removeRepeatedValues = [...new Set(repeatedValues)];

console.log(removeRepeatedValues);

/* WeakSet não discutido */