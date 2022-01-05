

window.addEventListener('load', () => {
    let idPost = location.search.slice(4)
    fetch(`https://desafio-front-end-ea066-default-rtdb.firebaseio.com/posts/${idPost}.json`)
    .then((response) => {
        return response.json()
    })
    .then((obj) => {        
        console.log(obj.nombre)
        document.querySelector('#inputTitulo').value = obj.titulo
        document.querySelector('#inputAbstract').value = obj.abstract
        document.querySelector('#inputAutor').value = obj.autor
        document.querySelector('#inputFechaCreacion').value = obj.fechaCreacion
        document.querySelector('#inputTiempoLectura').value = obj.tiempoLectura
        document.querySelector('#inputContenidoPost').value = obj.contenidoPost
    })         
})



let modificarPost = document.querySelector('#buttonModificar')
let idInput = location.search.slice(7)

modificarPost.addEventListener('click', () => {
   
    let newTitulo = document.querySelector('#inputTitulo').value    
    let newAbstract = document.querySelector('#inputAbstract').value 
    let newAutor = document.querySelector('#inputAutor').value
    let newFechaCreacion = document.querySelector('#inputFechaCreacion').value
    let newTiempoLectura = document.querySelector('#inputTiempoLectura').value
    let newContenidoPost = document.querySelector('#inputContenidoPost').value
    
    let newPostAct = {
        titulo: newTitulo,
        abstract: newAbstract,
        autor: newAutor,
        fechaCreacion: newFechaCreacion,
        tiempoLectura: newTiempoLectura,
        contenidoPost: newContenidoPost
    }
        
    fetch(`https://desafio-front-end-ea066-default-rtdb.firebaseio.com/posts/${idPost}.json`,{
    method: 'PATCH',
    headers: {
        'content-type':'aplication/json'    
    },
    body: JSON.stringify(newPostAct)
    })
    .then((response) => {
        console.log('BD actualizada con patch')
        location.replace('http://127.0.0.1:5501/index.html')
    }) 
})


