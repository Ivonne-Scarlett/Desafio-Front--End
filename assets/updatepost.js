const token = localStorage.getItem('token')

window.addEventListener('load', () => {
    let idPost = location.search.slice(8)  
    
    fetch(`https://apibackend-smart-panda-xb.mybluemix.net/posts/${idPost}`)
    .then((response) => {
        return response.json()
    })
    .then((obj) => {        
        
        document.querySelector('#inputTitulo').value = obj.post.titulo
        document.querySelector('#inputAbstract').value = obj.post.abstract
        document.querySelector('#inputAutor').value = obj.post.autor        
        document.querySelector('#inputTiempoLectura').value = obj.post.tiempoLectura
        document.querySelector('#inputContenidoPost').value = obj.post.contenidoPost
        document.querySelector('#inputImagenPost').value = obj.post.imagenPost        
    })         
})


let modificarPost = document.querySelector('#buttonModificar')
let idInput = location.search.slice(8)

modificarPost.addEventListener('click', () => {
    if(token == null){
        alert('You need to login to post')
        location.replace('login.html')
        return
    }

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

    fetch(`https://apibackend-smart-panda-xb.mybluemix.net/posts/${idPost}`, {
    method: 'PATCH',
    headers: {
        'Content-Type':'application/json',
        Authorization:`Bearer ${token}`    
    },
    body: JSON.stringify(newPostAct),
    })
    .then((obj)=>{
        return obj.json();
    })

    .then((response) => {
        console.log(response.ok)
         if(response.ok == false){
            alert('Session expired')
            location.replace('login.html')
            return
         }
        location.replace('index.html')
    })
    .catch(error => {
        console.log(error) 
    })

    }else{
        alert("Hay espacios vacios")
    }
})


let eliminar = document.querySelector('#eliminarPost')

eliminar.addEventListener('click',()=>{
      let confirmation = confirm('¿Deseas eliminar este post? ')
      if(confirmation == true){
        let idPost = location.search.slice(8)
        fetch(`https://apibackend-smart-panda-xb.mybluemix.net/posts/${idPost}`,{
          method:'DELETE',
          headers: {
            Authorization:`Bearer ${token}`    
        }
        })
        .then((response)=>{
            if(response.ok == false){
                alert('Session expired')
                location.replace('login.html')
                return
             }
          location.replace('index.html')      
        })
      }
      else{
        console.log('no se elimino nada')
      }
})


