class MyClass {
  #foo; // must be declared

  constructor(foo) {
      this.#foo = foo;
  }

  incFoo() {
      this.#foo++;
  }
}
