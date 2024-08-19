import { Aguila } from "./clases/Aguila.js";
import { Leon } from "./clases/Leon.js";
import { Lobo } from "./clases/Lobo.js";
import { Oso } from "./clases/Oso.js";
import { Serpiente } from "./clases/Serpiente.js";
import { iife } from "./modulos/iife.js";

const nuevosAnimales = {Aguila, Leon, Lobo, Oso, Serpiente}

// Selección de animal con su imagen en el formulario
document.getElementById('animal').addEventListener('change', async (event) => {

  const { imagen} = await iife.obtenerDatos(event.target.value);
  const preview = document.getElementById('preview') 
  preview.style.backgroundImage = ''; 
  preview.style.backgroundImage = `url('assets/imgs/${imagen}')`;
  preview.style.backgroundSize = 'contain'; 
  preview.style.backgroundPosition = 'center'; 
  preview.style.backgroundRepeat = 'no-repeat'
  
})

// Añade animales a la tabla de investigados
document.getElementById('btnRegistrar').addEventListener('click', async () => {

  const nombreHTML = document.getElementById('animal')
  const edadHTML = document.getElementById('edad')
  const comentariosHTML = document.getElementById('comentarios')
  const { imagen, sonido } = await iife.obtenerDatos(nombreHTML.value);
  
  if (!nombreHTML.value || !edadHTML.value || !comentariosHTML.value) {
    alert('Por favor, complete todos los campos.');
    return;
  }
  
  // Crea instancia de un animal nuevo
  let animal = new nuevosAnimales[nombreHTML.value](
     nombreHTML.value, 
     edadHTML.value,
     imagen,
     comentariosHTML.value,
     sonido
    );
// Llamada a las funciones creadas en iife.
iife.agregarAnimal(animal);
iife.cardAnimal(iife.listaAnimales, 'Animales')
iife.limpiar()
});

// por descrifar 🙃
// mostrar card con detalles de cada animal agregado a la tabla de investigados
// const btnsModal = document.querySelectorAll('.btnMostrarModal');
// btnsModal.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const id = btn.value;
//         mostrarModal(nuevosAnimales, id);
//     });
// });










