import { Animal } from "./Animal.js"

class Serpiente extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
    
  }
  sisear() {
  return "sisear";
  }
}

export { Serpiente };