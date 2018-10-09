function OldSquare(altura, largura) {
  name = 'square';

  this.altura = altura;
  this.largura = largura;

  this.area = function area() {
    return this.altura * this.largura;
  }
}

console.log(OldSquare.name)

const myOldSquare = new OldSquare(10, 10);
console.log(myOldSquare.area());
console.log(myOldSquare.name);

/* ---- */

class ClassSquare {
  static name() {
    return 'square';
  }

  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  get area() {
    return this.altura * this.largura;  
  }
}

console.log(ClassSquare.name());

const myClassSquare = new ClassSquare(10, 10);
console.log(myClassSquare.area);

console.log(myClassSquare.name());
