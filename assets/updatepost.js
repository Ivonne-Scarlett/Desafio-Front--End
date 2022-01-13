

window.addEventListener('load', () => {
    let idPost = location.search.slice(8)    
    
    fetch(`https://desafio-front-end-ea066-default-rtdb.firebaseio.com/posts/${idPost}.json`)
    .then((response) => {
        return response.json()
    })
    .then((obj) => {        
        
        document.querySelector('#inputTitulo').value = obj.titulo
        document.querySelector('#inputAbstract').value = obj.abstract
        document.querySelector('#inputAutor').value = obj.autor        
        document.querySelector('#inputTiempoLectura').value = obj.tiempoLectura
        document.querySelector('#inputContenidoPost').value = obj.contenidoPost
        document.querySelector('#inputImagenPost').value = obj.imagenPost        
    })         
})


let modificarPost = document.querySelector('#buttonModificar')
let idInput = location.search.slice(8)

modificarPost.addEventListener('click', () => {
    let idPost = location.search.slice(8)
    let newTitulo = document.querySelector('#inputTitulo').value    
    let newAbstract = document.querySelector('#inputAbstract').value 
    let newAutor = document.querySelector('#inputAutor').value    
    let newTiempoLectura = document.querySelector('#inputTiempoLectura').value
    let newContenidoPost = document.querySelector('#inputContenidoPost').value
    let newImagenPost = document.querySelector('#inputImagenPost').value
    if(
        newTitulo != '' &&
        newAbstract != '' &&
        newAutor != '' &&        
        newTiempoLectura != '' &&
        newImagenPost != '' &&
        newContenidoPost != ''
     ){
    let newPostAct = {
        titulo: newTitulo,
        abstract: newAbstract,
        autor: newAutor,       
        tiempoLectura: newTiempoLectura,
        contenidoPost: newContenidoPost,
        imagenPost: newImagenPost
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
        location.replace('index.html')
    }) 
    }else{
        alert("Hay espacios vacios")
    }
})


let eliminar = document.querySelector('#eliminarPost')

eliminar.addEventListener('click',()=>{
      let confirmation = confirm('¿Deseas eliminar este post? ')
      if(confirmation == true){
        let idpost = location.search.slice(8)
        fetch(`https://desafio-front-end-ea066-default-rtdb.firebaseio.com/posts/${idpost}.json`,{
          method:'DELETE'
        })
        .then(()=>{
          location.replace('index.html')      
        })
      }
      else{
        console.log('no se elimino nada')
      }
})


