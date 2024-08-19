import { Animal } from "./Animal.js"

class Leon extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
    
  }
  rugir() {
this.sonido = sonido;
  }
}

export { Leon };