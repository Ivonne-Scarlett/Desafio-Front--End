

window.addEventListener('load', () => {
    let idPost = location.search.slice(4)
    fetch(`https://desafio-front-end-ea066-default-rtdb.firebaseio.com/posts/${idPost}.json`)
    .then((response) => {
        return response.json()
    })
    .then((obj) => {        
        console.log(obj.nombre)
        document.querySelector('#titulo').value = obj.titulo
        document.querySelector('#abstract').value = obj.abstract
        document.querySelector('#autor').value = obj.autor
        document.querySelector('#fechaCreacion').value = obj.fechaCreaciontor
        document.querySelector('#tiempoLectura').value = obj.tiempoLectura
        document.querySelector('#contenidoPost').value = obj.contenidoPost
    })         
})




