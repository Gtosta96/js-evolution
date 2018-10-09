function* someDragons() {
  yield 'dragon 1';
  yield 'dragon 2';
  yield 'dragon 3';

  if (Math.random() > 0.5) return;

  yield 'dragon 4';
}

const iterator = someDragons();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());