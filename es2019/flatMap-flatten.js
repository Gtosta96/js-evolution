const flatten = (array) => {
  return [].concat(...array);
};

function flatMap(arr, mapFunc) {
  return flatten(arr).map(mapFunc);
}

/* ---- */

const array = ['a', ['b','c'], ['d']];
const flattened = flatten(array);
console.log(flattened);

const flatMapped = flatMap(array, (value) => {
  return `${value} -- Hello`;
})

console.log(flatMapped);