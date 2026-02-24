carro={
    marca:"chevrolet",
    modelo:"alto 2007",
    propietario:{
        nombre:"alex",
        edad:40,
    }

}
//Crea una función que desestructure directamente el propietario en el parámetro.
function carro1({propietario:{nombre,edad}}){
    console.log(`el dueño ${nombre} de ${edad} años`);


}
carro1(carro);
