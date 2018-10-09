function getFromSomewhere() {
  return Promise.resolve('HELLO WORLD');
}

console.log(getFromSomewhere());

(async () => {
  const values = await getFromSomewhere();
  console.log(values);
})();