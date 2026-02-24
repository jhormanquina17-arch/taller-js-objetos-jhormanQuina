carro={
    marca:"chevrolet",
    modelo:"alto 2007",
    propietario:{
        nombre:"alex",
        edad:40,
    }

}

function recibir(carro){
    return`el auto de ${carro.propietario.nombre} modelo ${carro.modelo} se encuentra mal estacionado `

}
console.log(recibir(carro))