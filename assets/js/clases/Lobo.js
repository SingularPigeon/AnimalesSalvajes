import { Animal } from "./Animal.js"

class Lobo extends Animal {

  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
    
  }

  aullar() {
  this.sonido = sonido;
  }
}

export { Lobo }