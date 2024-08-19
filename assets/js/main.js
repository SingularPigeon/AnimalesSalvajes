import { Aguila } from "./clases/Aguila.js";
import { Leon } from "./clases/Leon.js";
import { Lobo } from "./clases/Lobo.js";
import { Oso } from "./clases/Oso.js";
import { Serpiente } from "./clases/Serpiente.js";
import { iife } from "./datosApi.js";


document.getElementById('animal').addEventListener("change", async (event) => {

  const { imagen} = await iife.obtenerDatos(event.target.value);
  const preview = document.getElementById('preview') 
  preview.style.backgroundImage = ''; 
  preview.style.backgroundImage = `url('assets/imgs/${imagen}')`;
  preview.style.backgroundSize = 'contain'; 
  preview.style.backgroundPosition = 'center'; 
  preview.style.backgroundRepeat = 'no-repeat'
  

})
















// let animales = [];
// let img = document.getElementById('preview')
// let audio = document.getElementById('player')
// const registrar = document.getElementById('btnRegistrar');
// let nombre = document.getElementById('animal');


// nombre.addEventListener('change', function(event) {
//   const valor = event.target.value;
//   switch (valor) {
//       case 'Leon':
//           img.innerHTML = `<img src="assets/imgs/Leon.png" width="200">`;
//           break;
//       case 'Lobo':
//           img.innerHTML = `<img src="assets/imgs/Lobo.jpg" width="200">`;
//           break;
//       case 'Oso':
//           img.innerHTML = `<img src="assets/imgs/Oso.jpg" width="250">`;
//           break;
//       case 'Serpiente':
//           img.innerHTML = `<img src="assets/imgs/Serpiente.jpg" width="250" alt="200">`;
//           break;
//       case 'Aguila':
//           img.innerHTML = `<img src="assets/imgs/Aguila.png" width="200">`;
//           break;
//       default:
//           img.innerHTML = ''; // Opcional: limpiar la imagen si no coincide ningún caso
//           break;
//   }
// });

// const preview =  document.getElementById("preview")
// document.getElementById('animal').addEventListener("change", async (event) => {
//   const nombre = event.target.value; 
//   const animalData = await getData(nombre);
  
//   if (animalData) {
//     preview.innerHTML = `
//       <img src="${animalData.imagen}" alt="${animalData.name}" 
//       class="mw-100 h-100 object-fit-cover d-block mx-auto"  />
//     `;
//   } else {
//     preview.innerHTML = '<p>No se encontró información para este animal.</p>';
//   }
// })