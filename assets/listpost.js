
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
        <div class="row justify-content-end">
        <div class='col-4 '>
        <button type="button" class="btn btn-primary btn-sm ">Eliminar post</button>
        <a href='updatepost.html?idpost=${idpost}'>
        <button type="button" class="btn btn-primary btn-sm">Editar Post </button>
        </a>
        </div>
        </div>
        </div>

      `
        console.log(posts.titulo)
    
    document.querySelector('.posts').innerHTML = template
  };

  getposts(callBack)