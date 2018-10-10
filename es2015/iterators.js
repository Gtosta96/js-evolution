// const rawIterator = {
//   [Symbol.iterator]: () => {
//     return {
//       next: () => {
//         const randomNumber = Math.floor(Math.random() * 100 + 1);

//         if (randomNumber > 80) {
//           return {
//             value: undefined,
//             done: true,
//           }
//         };

//         return {
//           value: randomNumber,
//           done: false,
//         }
//       }
//     }
//   }
// }

// for (const it of rawIterator) {
//   console.log(it);
// }

/* --- */

const array = [1, 3, 6, 9];
const iterator = array[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());