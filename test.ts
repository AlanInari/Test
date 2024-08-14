

const miObjeto = {} //aqui representan un objeto

const miFuncion = () => { //aquí las {} representan un bloque de código

}

const objetoConPropiedades = {
    primeraPropiedad: "Hola soy la primera propiedad",
    segundaPropiedad: 1254,
    objetoPropiedad: {
        propiedadInterna1: "1",
        propiedadInterna2: "2",
        propiedadInterna3: "3",
        objetoObjetoPropiedad: {
            propiedadInterna1: "1"
        },
    }
}

// asi mas o menos es como se van accediendo a las propiedades de un objeto
console.log(objetoConPropiedades.primeraPropiedad);

objetoConPropiedades.primeraPropiedad = "Cambie";

console.log(objetoConPropiedades.primeraPropiedad);

