import { Animal } from "./Animal.js"

class Aguila extends Animal{
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
    
  }
chillar() {
return "chillar";
  }

}
export { Aguila };