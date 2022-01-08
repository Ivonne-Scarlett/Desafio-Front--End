
let botonCrear = document.querySelector("#buttonCrear")
botonCrear.addEventListener("click", () =>{
    let newTitulo = document.querySelector('#inputTitulo').value    
    let newAbstract = document.querySelector('#inputAbstract').value
    let newAutor = document.querySelector('#inputAutor').value
    let newFechaCreacion = document.querySelector('#inputFechaCreacion').value
    let newTiempoLectura = document.querySelector('#inputTiempoLectura').value
    let newContenidoPost = document.querySelector('#inputContenidoPost').value
    if(
        newTitulo != '' &&
        newAbstract != '' &&
        newAutor != '' &&
        newFechaCreacion != '' &&
        newTiempoLectura != '' &&
        newContenidoPost != ''
     ){
        let newPost = {
            titulo: newTitulo,
            abstract: newAbstract,
            autor: newAutor,
            fechaCreacion: newFechaCreacion,
            tiempoLectura: newTiempoLectura,
            contenidoPost: newContenidoPost
        }
        fetch("https://desafio-front-end-ea066-default-rtdb.firebaseio.com/posts/.json", {
            method: "POST",
            headers: {
                "content-type": "aplication/json"
            },
            body: JSON.stringify(newPost)
        })
        .then((resp) => {
            location.replace("/index.html")
            return console.log("SE AGREGO NUEVO POST")
        })
    }else{
        alert("Hay espacios vacios")
    }
})

