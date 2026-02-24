carro={
    marca:"chevrolet",
    modelo:"alto 2007",
    propietario:{
        nombre:"alex",
        edad:40,
    }

}
let carros={...carro}
console.log(carro)
console.log(carros);
carro.propietario.estado="muy buen estado";
console.log(carro.propietario);
