const map = new Map();
map.set('1', 'one');
map.set('2', 'two');
map.set('3', 'three');

/* keys */
/* values */
/* entries */
for (const value of map) {
  console.log(value);
}

const array = Array.from(map);
console.log(array);

/* WeakMap não discutido */