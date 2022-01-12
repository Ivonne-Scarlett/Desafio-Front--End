let idpost = location.search.slice(8)
console.log(idpost)

const getposts = (callback) => {
    fetch(
        `https://desafio-front-end-ea066-default-rtdb.firebaseio.com/posts/${idpost}.json`
    )
      .then((obj) => {
        return obj.json();
      })
      .then((resp) => {
        callBack(resp)
      });
  };
  
  const callBack = (posts) => {
    let idpost = location.search.slice(8)
      let template = `     

        <div>
        <h1 class='mt-3'>${posts.titulo}</h1>
        </div>
        <div>
        <h4 class='ps-2 mt-3'>${posts.abstract}</h2>
        <img class="mt-4 img-fluid rounded-circle mb-4"
                  src="${posts.imagenPost}"
                  height="60"
                  width="60"
                  alt=""
                  />
        <span>${posts.autor}, </span>
        <span>${posts.fechaCreacion}</span>
        <button type="" class="btn btn-outline-secondary rounded-pill">${posts.tiempoLectura}</button>
        </div>
        <div>
            <p>${posts.contenidoPost}</p>
        </div>
        <div class="container-fluid">
        <div class="row justify-content-end mb-3">
        <div class='col-md-4'>
        <button type="button" class="btn btn-primary bg-black color-white btn-sm " id='eliminarPost' >Eliminar post</button>
        <a href='updatepost.html?idpost=${idpost}'>
        <button type="button" class="btn btn-primary bg-black color-white btn-sm ">Editar Post </button>
        </a>
        </div>
        </div>
        </div>
      `   
    
    document.querySelector('.posts').innerHTML = template
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
      
  }

  getposts(callBack)






// window.addEventListener('DOMContentLoaded', (event) => {
//   let eliminar = document.querySelector('#eliminarPost')
//   console.log('DOM fully loaded and parsed');
//   eliminar.addEventListener('click',()=>{
//     console.log('se esta eliminando')
//   })
// });

