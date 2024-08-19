const iife = (() => {
  const listaAnimales = [];

  async function obtenerDatos(nombre) {
    try {
      const response = await fetch("animales.json");
      const data = await response.json();
      const animalEncontrado = data.animales.find(animal => animal.name === nombre);
      return animalEncontrado;
    } catch (error) {
      console.error('Error al obtener el animal:', error);
      return null;
    }
  }

  function agregarAnimal(animal) {
    listaAnimales.push(animal);
  }

  // function cardAnimal(animales, id) {
  //   let cards = animales.map(animal => {
  //     return `
  //     <div class="card my-2">
  //       <img src="./assets/imgs/${animal.imagen}" alt="${animal.nombre}" class="card-img-top">
  //       <div class="card-body text-center">
  //         <h5 class="card-title">${animal.nombre}</h5>
  //         <audio controls style="max-width: 100%">
  //           <source src="./assets/sounds/${animal.sonido}" type="audio/mp3">
  //           Reproducir sonido
  //         </audio>
  //       </div>
  //     </div>
  //     `
  //   }).join('')

  //   document.getElementById(id).innerHTML = cards
  // }
  function cardAnimal(animales, id, index) {
    const container = document.getElementById(id);
    container.innerHTML = ''; // Limpiar contenido previo
  
    animales.forEach(animal => {
      // Crear el contenedor de la tarjeta
      const card = document.createElement('div');
      card.className = 'card m-2';
      card.style.width = '18rem'
  
      // Crear la imagen
      const img = document.createElement('img');
      img.src = `assets/imgs/${animal.imagen}`;
      img.alt = animal.nombre;
      img.className = 'card-img-top img-fluid object-fit-contain';
  
      // Crear el cuerpo de la tarjeta
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body text-center';
  
      // Crear el título
      const title = document.createElement('h5');
      title.className = 'card-title';
      title.textContent = animal.nombre;
  
      // Crear el elemento de audio
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.style.maxWidth = '100%';
  
      // Crear el source del audio
      const source = document.createElement('source');
      source.src = `./assets/sounds/${animal.sonido}`;
      source.type = 'audio/mp3';
  
      // Añadir el source al audio
      audio.appendChild(source);
  
      // Añadir el título y el audio al cuerpo de la tarjeta
      cardBody.appendChild(title);
      cardBody.appendChild(audio);
   
  
      // Añadir botón para abrir card en modal
      
        // Crear el botón
        const boton = document.createElement('button');
        boton.className = 'btnMostrarModal btn btn-dark';
        boton.value = index;
        boton.setAttribute('data-bs-toggle', 'modal');
        boton.setAttribute('data-bs-target', '#modalInvestigados');
        boton.textContent = 'Ver más';
        
      cardBody.appendChild(boton)
      // Añadir la imagen y el cuerpo al contenedor de la tarjeta
      card.appendChild(img);
      card.appendChild(cardBody);
  
      // Añadir la tarjeta al contenedor principal
      container.appendChild(card);
    });
  }
  

  const cardModal = (animales, id) => {
      const modalBody = document.querySelector('.modal-body');
      modalBody.innerHTML = '';

    // Convertir idAnimal a entero (por si llega como string)
      const indexAnimal = parseInt(id);
      const animal = animales[indexAnimal];

      modalBody.innerHTML += `
            <div class="row">
                <div class="col-md-6">
                    <img src="${animal.imagen}" class="img-fluid" alt="${animal.nombre}" style="height: 200px; object-fit: cover;">
                </div>
                <div class="col-md-6">
                    <h2>${animal.nombre}</h2>
                    <p>Edad: ${animal.edad}</p>
                    <p>Comentarios: ${animal.comentarios}</p>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
            </div>
        </div>
        </div>
        `
    
console.log(cardModal);
}



  return { obtenerDatos, agregarAnimal, listaAnimales, cardAnimal, cardModal };
})();

export { iife };