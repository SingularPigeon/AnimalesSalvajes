import { Animal } from "./Animal.js"

class Oso extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
    
  }

  grunir() {
  return "grunir";
  }
}

export { Oso };