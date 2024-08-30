import React, { useState } from 'react'

/**
 * interfaz de Props para el custom search button
 * Se define afuera del componente una interfaz que va a servir como MODELO de datos
 * para que cuando se utilice dentro de los parametros de nuestro componente
 * este pueda saber que propiedades va a recibir y que valores debe de tener dicha propiedad
 */
interface Props { // por ejemplo aqui declaramos el nombre de la interfaz
  /**
   * este es el nombre del boton // en esta linea describimos un poco la propiedad
   */
  buttonName: string; // y aqui le dimos un nombre y la tipamos o declaramos de que tipo va a ser
  // por ejemplo, si yo quisiera que en vez de button name fuera buttonNumber
  // Yo tal vez podria cambiar el nombre a buttonNumber: y despues de esos dos puntos
  // ponerle que va a ser de tipo number;
  // buttonNumber: number;
  /**
   * Y cuando yo mande a llamar mi componente <CustomSearchButton /> me va a pedir que le 
   * especifique la propiedad buttonNumber y solo me va a aceptar un numero
   * por ejemplo: <CustomSearchButton  buttonNumber={3} />
   */
}

/**
 * Fijate como aqui desestructuramos la interfaz props y la usamos
 * en los parametros de nuestro componente
 * Si no hacemos esto, basicamente la interfaz anterior nomas va a quedar de adorno y nunca va a ser
 * utilizada. Y si no especificamos esta parte pues no se va a poder utilizar dentro del bloque 
 * de codigo de custom search button
 */
const CustomSearchButton = ({ buttonName }: Props) => { 
  const [isClicked , setClicked] = useState<boolean>(false); // este es un hook que se llama useState
  const cambiarNombre = () => { // este es una funcion que conseguimos precargar gracias a la palabra const
    setClicked(!isClicked); // en esta linea cambiamos el valor de isClicked 
  }
  const clicado = "Fui cliccado"; // esta es una variable que conseguimos precargar gracias a la palabra const

 return (
    <div>
        <button onClick={cambiarNombre}> {/** aqui definimos la propiedad onClick de button y le dijimos que ejecute lo que hace la funcion cambiar nombre que declaramos ahi arriba */}
            { isClicked ? "He sido clicado" : buttonName } {/**esta es una operacion ternaria que alterna un valor si es verdadero o falso el cual conseguimos cambiar con la funcion de arriba */}
        </button>
    </div>
  )
}

export default CustomSearchButton
