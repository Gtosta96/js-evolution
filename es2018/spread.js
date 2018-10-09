const dragon = {
  name: 'Fluffykins',
  age: 1095,
  skills: [
    'Spiting Fire',
    'Roaring',
    'Flying',
  ]
}

const { skills, ...rest } = dragon;

console.log(skills);
console.log(rest);

/* ---- */

getDragonNameAndMakeItSpiteFire(dragon.name, dragon.skills[0]);

function getDragonNameAndMakeItSpiteFire(...props) {
  console.log(`The dragon ${props[0]} is ${props[1]}`);

}
