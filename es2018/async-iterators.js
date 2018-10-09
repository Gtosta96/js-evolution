({
  "env": {
    "params": {
      "runner": "--harmony_async_iteration"
    }
  }
})

const dragons = ['fluffykins', 'yuppykins','chufflykins', 'blubbykins'];

function* asyncGenerator(stopIndex) {
  let iteratorIndex = 0;

  while(iteratorIndex < stopIndex) {
    const index = Math.floor((Math.random() * dragons.length));
    const dragon = dragons[index];

    iteratorIndex++;
    yield Promise.resolve(dragon);
  }
}

/* ---- */

const it = asyncGenerator(2);
console.log(it.next());
console.log(it.next());
console.log(it.next());

// (async () => {
//   for await (const dragon of it) {
//     console.log(dragon);
//   }
// })();