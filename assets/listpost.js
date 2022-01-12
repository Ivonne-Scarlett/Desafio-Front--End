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
      
      <div class="container ">
            <form class="row position-relative">
                <div class="col-md-3"></div>
                <div class="col-md-6"><h1 class='mt-5'>${posts.titulo}</h1></div>
                <div class="col-md-3"></div>

                <div class="col-md-3"></div>
                <div class="col-md-6">
                  <p>
                      <img class="mt-4 img-fluid rounded-circle mb-4"
                      src="${posts.imagenPost}"
                      height="30"
                      width="30"
                      alt=""
                      />
                      <span class="text-primary fw-light ms-1">${posts.autor}</span>
                      <span class="fw-light ms-3">${posts.fechaCreacion} ·</span>
                      <span class="fw-light">${posts.tiempoLectura}</span>
                  </p>
                </div>
                <div class="col-md-3"></div>
                
                <div class="col-md-12">
                    <img class="mt-2 mb-2 col-md-12"
                    src="${posts.imagenPost}"
                    height="400" 
                    alt=""
                    />
                </div>

                <div class="col-md-3"></div>
                <div class="col-md-6"><h5 class='mt-5 fw-lighter fst-italic'>${posts.abstract}</h5></div>
                <div class="col-md-3"></div>
               
                <div class="col-md-3"></div>
                <div class="col-md-6 mt-5 mb-5"><p>${posts.contenidoPost}</p></div>
                <div class="col-md-3"></div>

                <div class="col-md-4"></div>
                <div class="col-md-2"><button type="button" class="btn btn-primary bg-black color-white btn-sm mb-5 " id='eliminarPost' >Eliminar post</button></div>
                <div class="col-md-3 d-flex ">
                  <a href='updatepost.html?idpost=${idpost}'>
                    <button type="button" class="btn btn-primary bg-black color-white btn-sm mb-5 ">Editar Post </button>
                  </a>
                </div>
                <div class="col-md-3"></div>

            </form>
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

