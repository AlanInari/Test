import React from 'react' //Aqui en esta area estan los imports

const Referencia = () => { // aqui en esta linea se esta declarando el componente y { indica que aqui empieza el bloque de codigo de tu componente
  return ( // este parentesis abierto, engloba todo lo que va a regresar tu componente. Muy importante que todo este encerrado en los parentesis
   //Aqui empieza el unico contenedor que debe de regresar App o cualquier componente que decidas hacer
   <div> 
   {/* Por ahora enfocate en trabajar */}
   {/* de aqui */}
    
     
   
   {/* a aqui */}
   </div> // aqui termina el contenedor
  ) // Aqui se cierra el parentesis del return de la linea 5, y encierra todo lo que tu componente va a regresar
} // aqui termina el bloque de codigo de tu componente. Aqui no solo hay lo que regresa el return. Tambien puede haber otras cosas arriba del return pero eso lo vemos despues en la introduccion de React

export default Referencia // esta linea sirve para poder dar nombre a la manera en que vamos a exportar el componente. Si al final dijera Componente2, entonces mi componente Referencia se podria exportar bajo el nombre de componente2 
