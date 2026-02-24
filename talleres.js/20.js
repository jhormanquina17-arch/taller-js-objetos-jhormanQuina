function libros({titulo,autor:{nombre,ciudad},editorial:{nombre_editorial,año}}){
    return`el ${titulo} fue escrito por ${nombre} q crecio en la ciudad de ${ciudad} y fue publicado por ${nombre_editorial} en el año${año}`
}
let libro={
    titulo:"don quijote de la mancha",
    autor:{
        nombre:" Miguel de Cervantes Saavedra",
        nacionalidad:"española"
    },editorial:{
        nombre_editorial:"Francisco de Robles",
        año : 1605
    }
}
console.log(libros(libro));
