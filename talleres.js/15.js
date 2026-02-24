usuario={
        nombre:"alex",
        edad:40,
    }
    let{nombre,edad}=usuario
console.log(nombre);
console.log(edad);
function datos(){
    return` el usuario ${usuario.nombre} cumple los ${usuario.edad} años y podra entrar al torneo`
}
console.log(datos(usuario));
