const iife = (() => {
  const listaAnimales = [];
  // Llamada a los datos en el arcchivo Json
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
  // Función para agregar animales al nuevo array
  function agregarAnimal(animal) {
    listaAnimales.push(animal);
  }

  // Función para la creación de card de imgaen y sonido
  function cardAnimal(animales, id) {
    const container = document.getElementById(id);
    container.innerHTML = ''; // Limpiar contenido previo
  
    animales.forEach(animal => {
      // Crea el contenedor de la tarjeta
      const card = document.createElement('div');
      card.className = 'card m-2';
      card.style.width = '18rem'
  
      // Crea la imagen
      const img = document.createElement('img');
      img.src = `assets/imgs/${animal.imagen}`;
      img.alt = animal.nombre;
      img.className = 'card-img-top img-fluid object-fit-contain';
  
      // Crea el cuerpo de la tarjeta
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body text-center';
  
      // Crea el título
      const title = document.createElement('h5');
      title.className = 'card-title';
      title.textContent = animal.nombre;
  
      // Crea el elemento de audio
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.style.maxWidth = '100%';
  
      // Crea el source del audio
      const source = document.createElement('source');
      source.src = `./assets/sounds/${animal.sonido}`;
      source.type = 'audio/mp3';
  
      // Añade el source al audio
      audio.appendChild(source);
  
      // Añade el título y el audio al cuerpo de la tarjeta
      cardBody.appendChild(title);
      cardBody.appendChild(audio);

      // Por descifrar 🙃
      // Añadir botón para abrir card en modal
      // boton.className = ' btn btn-dark';
      // boton.value = index;
      // boton.textContent = 'Ver más';
      // const boton = document.createElement('button');
      // cardBody.appendChild(boton)

      // Añadir la imagen y el cuerpo al contenedor de la tarjeta
      card.appendChild(img);
      card.appendChild(cardBody);
  
      // Añadir la tarjeta al contenedor principal
      container.appendChild(card);
    });
  }
  
  // Por descifrar 🙃
  // function cardModal (animales, id) {
  //     const modalBody = document.querySelector('.modal-body');
  //     modalBody.innerHTML = '';

  //     animales.forEach(animal => {
  //     const card = document.createElement('div');
  //     card.className = 'card m-2';
  //     card.style.width = '18rem'
  
  //     // Crear la imagen
  //     const img = document.createElement('img');
  //     img.src = `assets/imgs/${animal.imagen}`;
  //     img.alt = animal.nombre;
  //     img.className = 'card-img-top img-fluid object-fit-contain';
  
  //     // Crear el cuerpo de la tarjeta
  //     const cardBody = document.createElement('div');
  //     cardBody.className = 'card-body text-center';
  
  //     // Crear el título
  //     const title = document.createElement('h5');
  //     title.className = 'card-title';
  //     title.textContent = animal.nombre;
  
  //     cardBody.appendChild(title);
  //     cardBody.appendChild(audio);
  //     card.appendChild(img);
  //     card.appendChild(cardBody);
  
  //     // Añadir la tarjeta al contenedor principal
  //    modalBody.appendChild(card);
  //    })
    
  // }
  // Función para limpiar el formulario, luego de ingresarlos a 'Animales investigados'    
  const limpiar = () => {
    // Obtiene los datos de los campos llenados 
    const preview = document.getElementById('preview');
    const animalSelect = document.getElementById('animal');
    const edadSelect = document.getElementById('edad');
    const comentarios = document.getElementById('comentarios');
  
    // Limpiar el contenido de la imagen en vista previa
    preview.style.backgroundImage = '';
  
    // Restablecer los valores de los campos de formulario
    animalSelect.value = animalSelect.defaultValue;
    edadSelect.value = edadSelect.defaultValue;
    comentarios.value = '';
  };
      
     
      return { obtenerDatos, agregarAnimal, listaAnimales, cardAnimal, limpiar };
})();

export { iife };